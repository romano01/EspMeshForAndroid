define(["vue", "MINT", "Util", "txt!../../pages/resetDevice.html", "./addDevice", "./importDevice"],
    function(v, MINT, Util, resetDevice, addDevice, importDevice) {

    var ResetDevice = v.extend({

        template: resetDevice,

        data: function(){
            return {
                addFlag: false,
                showDesc: false,
                flagUl: false,
                scanDeviceList: [],
                scanOldList: [],
                scanMacs: [],
                resetId: "resetDevice-id",
                importId: "reset-import-id",
                selectAllId: "resetDevice-select-id",
                count: 0,
                selected: 0,
                searchReset: "",
                resetPairList: [],
                rssiMin: -120,
                rssiMax: -40,
                rssiValue: -80,
                showFilter: false,
                showHeight: false,
                isSelectedMacs: [],
                showFooterInfo: true,
            }
        },
        computed: {
            list: function () {
                var self = this, list = [];
                if (self.addFlag) {
                    self.scanDeviceList = self.$store.state.scanDeviceList;
                    if (Util._isEmpty(self.searchReset)) {
                        $.each(self.scanDeviceList, function(i, item) {
                            if (item.rssi >= self.rssiValue) {
                                list.push(item);
                            }
                        });
                    } else {
                        $.each(self.scanDeviceList, function(i, item) {
                            if ((item.name.indexOf(self.searchReset) != -1 || item.position.indexOf(self.searchReset) != -1 )
                                && item.rssi >= self.rssiValue) {
                                list.push(item);
                            }
                        })
                    }
                    if (self.showFilter) {
                        var macList = [];
                        $.each(list, function(i, item) {
                            if (self.scanMacs.indexOf(item.mac) > -1) {
                                macList.push(item);
                            }
                        })
                        list = macList;
                    }

                    if ($("#" + self.selectAllId).hasClass("active")) {
                        var allMacs = [];
                        $.each(list, function(i, item) {
                            allMacs.push(item.mac);
                        })
                        self.isSelectedMacs = allMacs;
                    }
                    self.count = list.length;
                    setTimeout(function() {
                        var docs = $("#" + self.resetId + " span.span-radio.active");
                        self.selected = docs.length;
                    });
                }
                return list;
            }
        },
        methods:{
            show: function() {
                var self = this;
                self.getLoadMacs();
                self.getPair();
                self.scanDeviceList = [];
                self.isSelectedMacs = [];
                self.$store.commit("setScanDeviceList", self.scanDeviceList);
                self.setScanList(self.scanDeviceList);
                self.selected = self.count = self.scanDeviceList.length;
                self.rssiValue = self.$store.state.rssiInfo;
                self.searchReset =  "";
                self.showFilter = false;
                self.showHeight = false;
                self.flagUl = false;
                self.showFooterInfo = true;
                self.initResetSlider();
                setTimeout(function() {
                    self.onBackReset();
                    window.onBluetoothStateChanged = self.onBluetoothStateChanged;
                    $("#" + self.selectAllId).addClass("active");
                });
                self.addFlag = true;
                var oHeight = $(document).height();     //获取当前窗口的高度
                $(window).resize(function () {
                    if ($(document).height() >= oHeight) {
                        self.showFooterInfo = true;
                    } else {
                        self.showFooterInfo = false;
                    }
                })
            },
            showFlag: function() {
                this.flagUl = !this.flagUl;
                if (this.flagUl) {
                    window.onBackPressed = this.hideFlag;
                } else {
                    this.onBackReset();
                }
            },
            getIcon: function (tid) {
                return Util.getIcon(tid);
            },
            hideFlag: function() {
                if (this.flagUl) {
                    this.flagUl = false;
                    this.onBackReset();
                }
            },
            getPair: function() {
                var self = this,
                    pairs = espmesh.loadHWDevices();
                if (!Util._isEmpty(pairs)) {
                    self.resetPairList = JSON.parse(pairs);
                }
                self.$store.commit("setSiteList", self.resetPairList);
            },
            getPairInfo: function(mac) {
                var self = this, position = "";
                    staMac = espmesh.getStaMacsForBleMacs(JSON.stringify([mac]));
                staMac = JSON.parse(staMac);
                if (staMac.length > 0) {
                    $.each(self.resetPairList, function(i, item) {
                        if (item.mac == staMac[0]) {
                            position = item.floor + "-" + item.area + "-" + item.code;
                            return false;
                        }
                    });
                }
                return position;
            },
            hide: function () {
                this.$store.commit("setShowScanBle", true);
                this.$emit("resetShow");
                espmesh.stopBleScan();
                this.addFlag = false;
            },
            hideParent: function () {
                this.addFlag = false;
                this.$parent.conReload();
            },
            getLoadMacs: function() {
                var macs = espmesh.loadMacs();
                this.scanMacs = JSON.parse(macs)
            },
            importDevice: function() {
                this.flagUl = false;
                this.$refs.import.show();
            },
            initResetSlider: function() {
                var self = this;
                setTimeout(function() {
                    $("#resetSlider").slider({
                        range: "min",
                        step: 1,
                        min: self.rssiMin,
                        max: self.rssiMax,
                        value: self.rssiValue,
                        slide: function(event, ui) {
                            self.rssiValue = ui.value;
                            self.$store.commit("setRssi", self.rssiValue);
                        },
                        stop: function(event, ui) {
                            self.rssiValue = ui.value;
                            self.$store.commit("setRssi", self.rssiValue);
                        }
                    })
                })
            },
            showHeightFun: function() {
                this.showHeight = !this.showHeight;
            },
            showFilterFun: function() {
                this.showFilter = !this.showFilter;
            },
            saveScanMac: function(mac) {
                var self = this,
                    index = self.scanMacs.indexOf(mac);
                if (index > -1) {
                    espmesh.deleteMac(mac);
                    self.scanMacs.splice(index, 1);
                } else {
                    espmesh.saveMac(mac);
                    self.scanMacs.push(mac);
                }
                self.getLoadMacs();
            },
            showMark: function(mac) {
                var flag = false;
                if (this.scanMacs.indexOf(mac) > -1) {
                    flag = true;
                }
                return flag;
            },
            onBackReset: function () {
                var self = this;
                clearTimeout(SCAN_DEVICE);
                espmesh.stopBleScan();
                setTimeout(function() {
                    self.startBleScan();
                    window.onScanBLE = self.onConScanBLE;
                })
                window.onBackPressed = self.hide;
            },
            addDevice: function () {
                var self = this;
                if (self.selected > 0) {
                    espmesh.stopBleScan();
                    var docs = $("#" + self.resetId + " span.span-radio.active"),
                        macs = [], list = [];
                    for (var i = 0; i < docs.length; i++) {
                        macs.push($(docs[i]).attr("data-value"));
                    };
                    $.each(self.scanDeviceList, function(i, item) {
                        if (macs.indexOf(item.mac) > -1) {
                            list.push(item);
                        }
                    });
                    self.$store.commit("setScanDeviceList", list);
                    self.$refs.device.show();
                }
            },
            getPosition: function(position) {
                var str = Util.getPosition(position);
                if (!Util._isEmpty(str)) {
                    return str;
                } else {
                    return "N/A";
                }
            },
            showDescInfo: function () {
                this.showDesc = true;
                window.onBackPressed = this.hideDescInfo;
            },
            hideDescInfo: function () {
                this.showDesc = false;
                window.onBackPressed = this.hide;
            },
            addSelectMac: function(mac) {
                var num = this.isSelectedMacs.indexOf(mac);
                if (num == -1) {
                    this.isSelectedMacs.push(mac);
                }
            },
            delSelectMac: function(mac) {
                var num = this.isSelectedMacs.indexOf(mac);
                if (num != -1) {
                    this.isSelectedMacs.splice(num, 1);
                }
            },
            isSelected: function(mac) {
                var self = this,
                    flag = false;
                if (self.isSelectedMacs.indexOf(mac) != -1) {
                    flag = true;
                }
                return flag;
            },
            selectDevice: function (mac, e) {
                var doc = $(e.currentTarget);
                if (doc.hasClass("active")) {
                    doc.removeClass("active");
                    this.delSelectMac(mac);
                    this.selected -= 1;
                } else {
                    doc.addClass("active");
                    this.addSelectMac(mac);
                    this.selected += 1;
                }
            },
            selectAllDevice: function (e) {
                var doc = $(e.currentTarget);
                if (doc.hasClass("active")) {
                    doc.removeClass("active");
                    $("span.span-radio").removeClass("active");
                    this.selected = 0;
                    this.isSelectedMacs = [];
                } else {
                    doc.addClass("active");
                    $("span.span-radio").addClass("active");
                    this.selected = this.count;
                    var allMacs = [];
                    $.each(this.scanDeviceList, function(i, item) {
                        allMacs.push(item.mac);
                    })
                    this.isSelectedMacs = allMacs;
                }

            },
            distance: function(rssi) {
                return Util.distance(rssi);
            },
            startBleScan: function() {
                var self = this,
                    flag = espmesh.isBluetoothEnable();
                if (flag) {
                    espmesh.startBleScan();
                } else {
                    MINT.Toast({
                        message: self.$t('bleConDesc'),
                        position: 'bottom',
                        duration: 2000
                    });
                }

            },
            setScanList: function(devices) {
                var self = this;
                $.each(devices, function(i, item) {
                    var name = item.name;
                    if(Util.isMesh(name, item.version)) {
                        var flag = true,
                            obj = {mac: item.mac, name: name, rssi: item.rssi, bssid: item.bssid,
                                position: self.getPairInfo(item.mac), tid: item.tid};
                        $.each(self.scanDeviceList, function(j, itemSub) {
                            if (item.mac == itemSub.mac) {
                                if (item.rssi >= self.rssiValue) {
                                    self.scanDeviceList.splice(j, 1, obj);
                                }
                                flag = false;
                                return false;
                            }
                        })
                        if (flag && !Util._isEmpty(obj)) {
                            self.scanDeviceList.push(obj);
                        }
                    }

                })
                self.$store.commit("setScanDeviceList", self.scanDeviceList);
            },
            onConScanBLE: function (devices) {
                var self = this;
                console.log(devices);
                devices = JSON.parse(devices);
                self.setScanList(devices);
                if (self.$refs.import.importFlag) {
                    self.$refs.import.onBackImport();
                } else {
                    if (self.showDesc) {
                        window.onBackPressed = self.hideDescInfo;
                    } else {
                        window.onBackPressed = self.hide;
                    }
                }
            },
            onBluetoothStateChanged: function(blue) {
                blue = JSON.parse(blue);
                if (blue.enable && this.addFlag && !this.$refs.device.addFlag) {
                    espmesh.startBleScan();
                }
            }
        },
        components: {
            "v-addDevice": addDevice,
            "v-importDevice": importDevice
        }


    });

    return ResetDevice;
});