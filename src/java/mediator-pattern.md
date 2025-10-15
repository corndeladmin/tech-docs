# The mediator pattern

## Purpose

The Mediator pattern facilitates communication between different classes by
introducing a mediator object that handles the interactions. It promotes loose
coupling by preventing classes from referring to each other explicitly, allowing
for easier maintenance and scalability.

In our context, we have smart devices like cameras and lights. When a camera
detects motion, it should turn on the lights in the same room. Instead of having
the camera interact directly with the lights, we use a mediator - in this case,
the `SmartHome` class - to manage the interaction.

## Implementation

We will implement the Mediator pattern by enhancing the `SmartHome` class to act
as the mediator between devices.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SmartHome {
    private List<SmartDevice> devices;

    public SmartHome() {
        this.devices = new ArrayList<>();
    }

    public void addDevice(SmartDevice device) {
        devices.add(device);
        device.setSmartHome(this);
    }

    public void motionDetected(String location) {
        // Turn on all lights in the specified location
        devices.stream()
            .filter(device -> device instanceof SmartLight)
            .filter(device -> device.getLocation().equals(location))
            .forEach(device -> ((SmartLight) device).turnOn());
    }
}
```

Now, we can ensure that devices are all registered in the same smart home:

```java
public abstract class SmartDevice {
    protected String location;
    protected SmartHome smartHome;

    public SmartDevice(String location) {
        this.location = location;
    }

    public String getLocation() {
        return location;
    }

    public void setSmartHome(SmartHome smartHome) {
        this.smartHome = smartHome;
    }
}
```

Finally, we could add a method for the cameras to notify lights, using the smart
home as a mediator:

```java
public class SmartCamera extends SmartDevice {

    public SmartCamera(String location) {
        super(location);
    }

    public void detectMotion() {
        startRecording();
        if (smartHome != null) {
            smartHome.motionDetected(location);
        }
    }

    private void startRecording() {
        System.out.println("Camera at " + location + " started recording.");
    }
}
```

The benefit is that cameras and lights themselves don't know or care whether
they're in the same room. We don't need to write any logic to tell each camera
when a new light is added, and so on. It's all taken care of through the
mediating `motionDetected()` method.

## Usage

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        SmartHome smartHome = new SmartHome();

        // Create devices
        SmartCamera cameraLivingRoom = new SmartCamera("Living Room");
        SmartCamera cameraKitchen = new SmartCamera("Kitchen");

        SmartLight lightLivingRoom = new SmartLight("Living Room");
        SmartLight lightKitchen = new SmartLight("Kitchen");

        // Register devices with the smart home
        smartHome.addDevice(cameraLivingRoom);
        smartHome.addDevice(cameraKitchen);
        smartHome.addDevice(lightLivingRoom);
        smartHome.addDevice(lightKitchen);

        // Simulate motion detection
        cameraLivingRoom.detectMotion();
        cameraKitchen.detectMotion();
    }
}
```

```console [output]
Camera at Living Room started recording.
Light at Living Room turned on.
Camera at Kitchen started recording.
Light at Kitchen turned on.
```

:::
