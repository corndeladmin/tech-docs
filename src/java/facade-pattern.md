# The facade pattern

## Purpose

The facade pattern allows us to create a simple interface around complex
operations. The facade might provide less granular control of the underlying
system, but in return it can be much faster and simpler to work with.

Suppose we have a smart home with lots of devices, and we want a simple way of
activating "holiday mode". There are a few things we need to do with our
different devices which would be tedious for the users to do one by one. We can
solve this by adding a facade - which in this case is a single `.holidayMode()`
method.

## Implementation

Suppose our `SmartHome` class keeps track of various devices such as cameras,
lights, and thermostats. Each device type has specific behaviors.

::: code-group

```java [SmartDevice.java]
public abstract class SmartDevice {
    protected String type;

    public String getType() {
        return type;
    }
}
```

```java [SmartCamera.java]
public class SmartCamera extends SmartDevice {
    private boolean isOn;

    public SmartCamera() {
        this.type = "camera";
        this.isOn = false; // Off by default
    }

    public boolean isOn() {
        return isOn;
    }

    public void togglePower() {
        isOn = !isOn;
    }
}
```

```java [SmartLight.java]
public class SmartLight extends SmartDevice {
    private boolean isOn;

    public SmartLight() {
        this.type = "light";
        this.isOn = false; // Off by default
    }

    public boolean isOn() {
        return isOn;
    }

    public void togglePower() {
        isOn = !isOn;
    }
}
```

```java
public class SmartThermostat extends SmartDevice {
    private int temperature;

    public SmartThermostat() {
        this.type = "thermostat";
        this.temperature = 20; // Default temperature
    }

    public void setTemperature(int temp) {
        this.temperature = temp;
    }

    public int getTemperature() {
        return temperature;
    }
}
```

:::

For "holiday mode", we want

- all cameras to be on
- all lights to be off
- all thermostats set to 5

We can create a facade within the `SmartHome` class to help with this.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SmartHome {
    private List<SmartDevice> devices;

    public SmartHome() {
        devices = new ArrayList<>();
    }

    // Method to add devices to the SmartHome
    public void addDevice(SmartDevice device) {
        devices.add(device);
    }

    // Facade method to activate holiday mode
    public void holidayMode() {
        // Turn on all cameras
        for (SmartDevice device : getDevicesByType("camera")) {
            if (device instanceof SmartCamera) {
                SmartCamera camera = (SmartCamera) device;
                if (!camera.isOn()) {
                    camera.togglePower();
                }
            }
        }

        // Turn off all lights
        for (SmartDevice device : getDevicesByType("light")) {
            if (device instanceof SmartLight) {
                SmartLight light = (SmartLight) device;
                if (light.isOn()) {
                    light.togglePower();
                }
            }
        }

        // Set all thermostats to 5 degrees
        for (SmartDevice device : getDevicesByType("thermostat")) {
            if (device instanceof SmartThermostat) {
                SmartThermostat thermostat = (SmartThermostat) device;
                thermostat.setTemperature(5);
            }
        }
    }

    // Helper method to retrieve devices by type
    private List<SmartDevice> getDevicesByType(String type) {
        return devices.stream()
                .filter(device -> device.getType().equals(type))
                .collect(Collectors.toList());
    }
}
```

## Usage

Now, instead of having our users go and configure all of these settings
themselves, we can show them a button which calls holiday mode:

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        SmartHome smartHome = new SmartHome();

        // Creating devices
        SmartCamera camera1 = new SmartCamera();
        SmartCamera camera2 = new SmartCamera();
        SmartLight light1 = new SmartLight();
        SmartLight light2 = new SmartLight();
        SmartThermostat thermostat1 = new SmartThermostat();
        SmartThermostat thermostat2 = new SmartThermostat();

        // Adding devices to the smart home
        smartHome.addDevice(camera1);
        smartHome.addDevice(camera2);
        smartHome.addDevice(light1);
        smartHome.addDevice(light2);
        smartHome.addDevice(thermostat1);
        smartHome.addDevice(thermostat2);

        // Simulating device states before holiday mode
        light1.togglePower(); // Turn on light1
        thermostat1.setTemperature(22); // Set thermostat1 to 22 degrees

        // Activating holiday mode
        smartHome.holidayMode();

        // Checking the state of devices after holiday mode
        System.out.println("Camera1 is on: " + camera1.isOn());
        System.out.println("Camera2 is on: " + camera2.isOn());
        System.out.println("Light1 is on: " + light1.isOn());
        System.out.println("Light2 is on: " + light2.isOn());
        System.out.println("Thermostat1 temperature: " + thermostat1.getTemperature());
        System.out.println("Thermostat2 temperature: " + thermostat2.getTemperature());
    }
}
```

```conole [output]
Camera1 is on: true
Camera2 is on: true
Light1 is on: false
Light2 is on: false
Thermostat1 temperature: 5
Thermostat2 temperature: 5
```

:::

The user has less overall control, but a much more convenient interface.
