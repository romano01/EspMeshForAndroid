define(function(){
    var m = {
        "email":"Email address",
        "password":"Password",
        "login":"Log in",
        "forgot": "Forgot the password",
        "register": "Register",
        "guest": "Guest mode",
        "userName": "User name",
        "inputPwd": "Enter the password",
        "confirmPwd": "Confirmm the password",
        "confirmBtn": "Confirm",
        "sendBtn": "Send",
        "carryOn": "Carry On",
        "editBtn": "Edit",
        "cancelBtn": "Cancel",
        "deleteBtn": "Delete",
        "upgradeBtn": "Upgrade",
        "tryAgainBtn": "Try again",
        "retryBtn": "Retry",
        "joinBtn": "Add the device to the mesh network",
        "selectJoinBtn": "Select device to add to mesh network",
        "loading": "Loading...",
        "loadEvent": "Load events...",
        "loadCon": "Networking...",
        "search": "Search name or location",
        "searchMAC": "Search mac or location",
        "searchGroup": "Search name",
        "editName": "Name the device",
        "edit": "Edit Location",
        "reconfigure": "Reset the devices",
        "configNet": "2.4G only",
        "aboutDevice": "About devices",
        "otaUpdate": "Firmware update",
        "association": "Device association",
        "editDevice": "Edit the device",
        "editGroup": "Edit the group",
        "addDevice": "Add device",
        "addGroup": "Add group",
        "addPair": "Add Location",
        "deleteDevice": "Delete device",
        "deviceOnline": "Device online",
        "deviceOffline": "Device offline",
        "deviceOnlineNum": "Number of device online",
        "deviceOfflineNum": "Number of device offline",
        "groupAll": "All",
        "scanDevice": "Scan the devices",
        "deviceList": "devices ",
        "next": "Next",
        "nextStep": "Next",
        "light": "Light",
        "switch": "Switch",
        "sensor": "Sensor",
        "other": "Other",
        "offline": "Offline",
        "local": "Local network",
        "cloud": "External network",
        "no": "N/A",
        "read": "Reading",
        "athletics": "Workout",
        "dinner": "Dinner",
        "sleep": "Sleep",
        "thinking": "Meditation",
        "work": "Work",
        "recreation": "Entertainment",
        "alarm": "Alarm",
        "love": "Romance",
        "deviceType": "Device type",
        "macAddress": "MAC address",
        "version": "Version",
        "time": "Time",
        "deviceVersion": "Device version",
        "parentNode": "Mdf version",
        "rootNode": "Idf version",
        "deviceStatus": "Device status",
        "status": "Status",
        "type": "Type",
        "deviceIP": "Device IP",
        "aboutUs": "About us",
        "softwareVersion": "Software version",
        "officialWebsite": "Official website",
        "confirmWIFI": "Confirm the Wi-Fi settings",
        "currentWIFI": "Wi-Fi",
        "selectDevice": "Selected devices",
        "color": "Color",
        "scene": "Mode",
        "set": "Settings",
        "pair": "Location",
        "import": "Import",
        "importDevice": "Import devices",
        "checkUpdates": "Check for updates",
        "latestVersion": "latest version ",
        "helpCenter": "Help",
        "network": "Wireless network",
        "accountInfo": "User account",
        "account": "Account",
        "logout": "Log out",
        "location": "Location information",
        "info": "Info",
        "floor": "Floor",
        "area": "Area",
        "code": "Code",
        "topology": "Topology",
        "topologyInfo": "Topological details",
        "command": "Send command",
        "statistical": "Statistical",
        "onOff": "On/Off",
        "brightMode": "BrightMode",
        "blinkMode": "BlinkMode",
        "glitterMode": "GlitterMode",
        "readMode": "ReadMode",
        "cozyMode": "CozyMode",
        "bedtime": "BedTime",
        "delayedOn": "DelayedOn",
        "delayedOff": "DelayedOff",
        "btnTab": "TAB",
        "btnHold": "HOLD",
        "btnLightness": "Lightness",
        "btnColor": "Color",
        "btnTemperature": "Warm and cold",
        "eventType": "Event Type",
        "singleGroup": "Control single group",
        "multipleGroup": "Control multiple group",
        "adjustment": "Adjustment",
        "fineTuning": "Fine tuning",
        "hue": "Hue",
        "temp": "Color temp",
        "brightness": "Brightness",

        "editNameDesc": "Edit the device name",
        "editNameInput": "Enter the new device name",
        "listDesc": "All configured devices will be displayed here:",
        "pairListDesc": "All location information will be displayed here:",
        "remindDesc": "Found new devices, Please click to Add.",
        "forgotDesc": "Please enter your email address to reset the password",
        "wifiDesc": "Currently 5G",
        "wifiConfirmDesc": "Please confirm whether your router supports 2.4G network.",
        "bleConDesc": "Please turn on Bluetooth",
        "locationConDesc": "Please turn on GPS",
        "wifiNoDesc": "Please connect the phone to Wi-Fi",
        "bleConDesc": "Please turn on Bluetooth",
        "meshIdDesc": "Please enter mesh ID!",
        "locationConDesc": "Please turn on GPS",
        "emptyEventDesc": "Sure to disable the device association",
        "connetDeviceDesc": "Devices connection...",
        "connetSuccessDesc": "Devices successfully",
        "connetFailDesc": "Devices fail",
        "deviceOtaDesc": "Choose the devices to be updated",
        "deleteTypeDeviceDesc": "Sure to reset the devices? The devices will be restored to the factory state.",
        "deleteGroupDeviceDesc": "Sure to reset the devices? The devices will be restored to the factory state.",
        "deleteDeviceDesc": "Sure to reset the devices? The devices will be restored to the factory state.",
        "deleteSuccessDesc": "The devices are successfully reset.",
        "deleteFailDesc": "The devices resetting fails.",
        "deleteSelectDesc": "Choose the devices to be reset",
        "addGroupDesc": "Enter the group name",
        "addTimingDesc": "Enter the timing name",
        "addGroupInput": "Enter the name here",
        "prohibitEditDesc": "The default group name can not be edited",
        "prohibitDelDesc": "The default group can not be deleted",
        "delGroupDesc": "Sure to delete the group?",
        "exitProgramDesc": "Tap again to exit the app",
        "logoutDesc": "Sure to log out?",
        "confailTitleDesc": "Please confirm if",
        "problemDesc1": "the device is placed too far away from the router",
        "problemDesc2": "the Wi-Fi password is correct",
        "problemDesc3": "the device is powered up",
        "problemDesc4": "the device is in the initialized state",
        "causeDesc1": "Please make sure that the devices flashes yellow, or else power on and off the devices for three consecutive times.",
        "causeDesc2": "Please make sure the devices are turned on and nearby",
        "causeDesc3": "Please turn on Bluetooth",
        "causeDesc4": "Please turn on GPS",
        "causeDesc5": "The newly added devices may not show in the list, please kindly wait for a while",
        "causeDesc6": "Reset the devices if the devices are not connected or connected to the wrong network",
        "scanToDesc": "Found",
        "countDeviceDesc": "available devices",
        "associationDesc": "Configure the devices to associate with each other",
        "wifiChangeDesc": "WiFi changes",
        "noDeviceDesc": "There is no device under the current route",
        "favoritesDesc": "Only favorites",
        "delExistEventDesc": "Switching event types will clear existing events",
        "longDesc": "The entered character is too long",

        "pullDownDesc": "Swipe down to refresh",
        "refreshDesc": "Click the 'Refresh' button to refresh",
        "notLoadDesc": "No devices found",
        "emailDesc": "Enter the email address",
        "passwordDesc": "Enter the password",
        "userNameDesc": "Enter the user account",
        "rePasswordDesc": "Enter the password again",
        "differentDesc": "Passwords do not match",
        "floorDesc": "Choose the floor",
        "areaDesc": "Choose the area",
        "codeDesc": "Enter the code",
        "macDesc": "Enter the mac",
        "existCodeDesc": "The entered code already exists in the selected floor area",
        "existMacDesc": "The entered MAC already exists",
        "saveSuccessDesc": "Saved successfully",
        "saveFailDesc": "Failed to save",
        "registerSuccessDesc": "Resgitered successfully",
        "registerFailDesc": "Fail to register",
        "loginFailDesc": "Fail to log in",
        "editSuccessDesc": "Modified",
        "editFailDesc": "Failure",
        "delSuccessDesc": "Delete successfully",
        "delFailDesc": "Delete failed",
        "userNameDesc": "Please enter the user account",
        "delayTimeDesc": "Please enter a delay",
        "rePasswordDesc": "Reenter the password",
        "downloadSuccessDesc": "Downloaded",
        "downloadFailDesc": "Fail to connect to the cloud",
        "sendSuccessDesc": "Sent the email",
        "sendFailDesc": "Fail to send the email",
        "deviceUpgradingDesc": "Devices upgrading...",
        "upgradeSucDesc": "Devices upgraded",
        "upgradepPartSucDesc": "Some devices upgraded",
        "upgradingDesc": "Upgrading",
        "upgradePartFailDesc": "Upgrade fails",
        "deviceNoExistDesc": "The device selected for upgrade no longer exists.",
        "upgradeFailDesc": "The devices upgrade fails. Please check your network and try again.",
        "conRouteFailDesc": "Connection route failed",
        "pwdFailDesc": "Wrong password",
        "delInfoDesc": "Are you sure you want to delete this information?",
        "jsonDesc": "Json format is incorrect",
        "farDeviceDesc": "Too far from the device",
        "processDownload": "Download",
        "processTransport": "Transport",
        "processCutover": "Cutover",
        "selectDeviceDesc": "Please select devices",
        "selectEventDesc": "Please select events",

        "emptyEventTitle": "Clear the association",
        "connetDeviceTitle": "Connect the devices",
        "connetFailTitle": "Connection fails",
        "addGroupTitle": "Add a new group",
        "addTimingTitle": "Add a new timing",
        "editGroupTitle": "Edit group name",
        "addDelayTitle": "Add delay time",
        "delGroupTitle": "Delete the group",
        "delInfoTitle": "Delete information",
        "downloadBinTitle": "Download the bin",
        "enterBinUrl": "Enter bin url",
        "noShowTitle": "My devices are not displayed here",
        "noShowCauseTitle": "Causes of failure to display the devices",
        "binServerAddress": "Bin server address",
        "eventBtn": "Event button",
        "nav":{
            "recent":"Recent",
            "device":"Devices",
            "group":"Group",
            "user":"User"
        }
    }
    return {
        m: m
    };
})