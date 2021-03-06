package iot.espressif.esp32.action.device;

import java.util.ArrayList;
import java.util.Collection;

import iot.espressif.esp32.db.manager.EspDBManager;
import iot.espressif.esp32.model.device.IEspDevice;
import iot.espressif.esp32.model.device.properties.EspDeviceState;
import iot.espressif.esp32.model.user.EspUser;

public class EspActionDeviceDelete implements IEspActionDeviceDelete {
    @Override
    public void doActionDelete(IEspDevice device) {
        ArrayList<IEspDevice> devices = new ArrayList<>(1);
        devices.add(device);
        doActionDelete(devices);
    }

    @Override
    public void doActionDelete(Collection<IEspDevice> devices) {
        for (IEspDevice device : devices) {
            device.addState(EspDeviceState.State.DELETED);
        }

        EspDBManager manager = EspDBManager.getInstance();
        for (IEspDevice device : devices) {
            manager.device().deleteDevice(device.getMac());
        }

        for (IEspDevice device : devices) {
            EspUser.INSTANCE.syncDevice(device);
        }
    }
}
