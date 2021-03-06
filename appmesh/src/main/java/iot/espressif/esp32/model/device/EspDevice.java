package iot.espressif.esp32.model.device;

import android.text.TextUtils;
import android.util.SparseArray;

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import iot.espressif.esp32.model.device.properties.EspDeviceCharacteristic;
import iot.espressif.esp32.model.device.properties.EspDeviceState;
import iot.espressif.esp32.utils.DeviceUtil;

class EspDevice implements IEspDevice {
    private final SparseArray<EspDeviceCharacteristic> mCharaArray;

    private long mId;
    private String mKey;
    private String mMac;
    private String mCurrentRomVersion;
    private String mName;
    private int mTypeId;
    private String mTypeName;
    private boolean mIsMesh;
    private InetAddress mInetAddress;
    private EspDeviceState mState;
    private String mParentDeviceMac;
    private String mRootDeviceMac;
    private String mGroupMac;
    private int mMeshLayerLevel;
    private String mMeshId;
    private String mProtocol;
    private int mProtocolPort = -1;
    private Map<String, Object> mCacheMap;
    private String mPosition;

    private String mIdfVersion;
    private String mMdfVersion;
    private int mMlinkVersion;

    EspDevice() {
        mCharaArray = new SparseArray<>();
        mCacheMap = new Hashtable<>();
        mMeshLayerLevel = LAYER_UNKNOW;
    }

    @Override
    public long getId() {
        return mId;
    }

    @Override
    public void setId(long id) {
        mId = id;
    }

    @Override
    public String getKey() {
        return mKey;
    }

    @Override
    public void setKey(String key) {
        mKey = key;
    }

    @Override
    public String getMac() {
        return mMac;
    }

    @Override
    public void setMac(String mac) {
        mMac = mac;
    }

    @Override
    public String getCurrentRomVersion() {
        return mCurrentRomVersion;
    }

    @Override
    public void setCurrentRomVersion(String version) {
        mCurrentRomVersion = version;
    }

    @Override
    public String getName() {
        if (TextUtils.isEmpty(mName)) {
            return DeviceUtil.getNameByBssid(mMac);
        }
        return mName;
    }

    @Override
    public void setName(String name) {
        mName = name;
    }

    @Override
    public int getDeviceTypeId() {
        return mTypeId;
    }

    @Override
    public void setDeviceTypeId(int tid) {
        mTypeId = tid;
    }

    @Override
    public String getDeviceTypeName() {
        return mTypeName;
    }

    @Override
    public void setDeviceTypeName(String name) {
        mTypeName = name;
    }

    @Override
    public boolean isMesh() {
        return mIsMesh;
    }

    @Override
    public void setMesh(boolean isMesh) {
        mIsMesh = isMesh;
    }

    @Override
    public InetAddress getInetAddress() {
        return mInetAddress;
    }

    @Override
    public String getHostAddress() {
        return mInetAddress == null ? null : mInetAddress.getHostAddress();
    }

    @Override
    public void setInetAddress(InetAddress inetAddress) {
        mInetAddress = inetAddress;
    }

    @Override
    public void setDeviceState(EspDeviceState state) {
        mState = state;
    }

    @Override
    public void addState(EspDeviceState.State state) {
        mState.addState(state);
    }

    @Override
    public void removeState(EspDeviceState.State state) {
        mState.removeState(state);
    }

    @Override
    public void clearState() {
        mState.clearState();
    }

    @Override
    public boolean isState(EspDeviceState.State state) {
        return mState.isState(state);
    }

    @Override
    public String getParentDeviceMac() {
        return mParentDeviceMac;
    }

    @Override
    public void setParentDeviceMac(String parentMac) {
        mParentDeviceMac = parentMac;
    }

    @Override
    public String getRootDeviceMac() {
        return mRootDeviceMac;
    }

    @Override
    public void setRootDeviceMac(String rootMac) {
        mRootDeviceMac = rootMac;
    }

    @Override
    public void setGroupMac(String groupMac) {
        mGroupMac = groupMac;
    }

    @Override
    public String getGroupMac() {
        return mGroupMac;
    }

    @Override
    public int getMeshLayerLevel() {
        return mMeshLayerLevel;
    }

    @Override
    public void setMeshLayerLevel(int level) {
        mMeshLayerLevel = level;
    }

    public String getMeshId() {
        return mMeshId;
    }

    @Override
    public String getProtocol() {
        return mProtocol;
    }

    @Override
    public void setProtocol(String protocol) {
        mProtocol = protocol;
    }

    @Override
    public void setProtocolPort(int port) {
        mProtocolPort = port;
    }

    @Override
    public int getProtocolPort() {
        return mProtocolPort;
    }

    public void setMeshId(String meshId) {
        mMeshId = meshId;
    }

    @Override
    public EspDeviceCharacteristic getCharacteristic(int cid) {
        synchronized (mCharaArray) {
            return mCharaArray.get(cid);
        }
    }

    @Override
    public List<EspDeviceCharacteristic> getCharacteristics() {
        synchronized (mCharaArray) {
            List<EspDeviceCharacteristic> result = new ArrayList<>();
            for (int i = 0; i < mCharaArray.size(); i++) {
                result.add(mCharaArray.valueAt(i));
            }
            return result;
        }
    }

    @Override
    public void addOrReplaceCharacteristic(EspDeviceCharacteristic characteristic) {
        synchronized (mCharaArray) {
            mCharaArray.append(characteristic.getCid(), characteristic);
        }
    }

    @Override
    public void addOrReplaceCharacteristic(Collection<EspDeviceCharacteristic> characteristics) {
        synchronized (mCharaArray) {
            for (EspDeviceCharacteristic c : characteristics) {
                mCharaArray.append(c.getCid(), c);
            }
        }
    }

    @Override
    public void removeCharacteristic(int cid) {
        synchronized (mCharaArray) {
            mCharaArray.remove(cid);
        }
    }

    @Override
    public void clearCharacteristics() {
        synchronized (mCharaArray) {
            mCharaArray.clear();
        }
    }

    @Override
    public void putCahce(String key, Object value) {
        mCacheMap.put(key, value);
    }

    @Override
    public Object getCache(String key) {
        return mCacheMap.get(key);
    }

    @Override
    public void removeCache(String key) {
        mCacheMap.remove(key);
    }

    @Override
    public void setPosition(String position) {
        mPosition = position;
    }

    @Override
    public String getPosition() {
        return mPosition;
    }

    @Override
    public void setIdfVersion(String idfVersion) {
        mIdfVersion = idfVersion;
    }

    @Override
    public String getIdfVersion() {
        return mIdfVersion;
    }

    @Override
    public void setMdfVersion(String mdfVersion) {
        mMdfVersion = mdfVersion;
    }

    @Override
    public String getMdfVersion() {
        return mMdfVersion;
    }

    @Override
    public void setMlinkVersion(int mlinkVersion) {
        mMlinkVersion = mlinkVersion;
    }

    @Override
    public int getMlinkVersion() {
        return mMlinkVersion;
    }

    @Override
    public void release() {
        mCharaArray.clear();
        mCacheMap.clear();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null || !(obj instanceof IEspDevice)) {
            return false;
        }

        if (this == obj) {
            return true;
        }

        IEspDevice other = (IEspDevice) obj;
        return other.getMac().equals(mMac);
    }

    @Override
    public int hashCode() {
        return mMac == null ? super.hashCode() : mMac.hashCode();
    }
}
