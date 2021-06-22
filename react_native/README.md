# REACT Native
- React Native is the most popular framework for developing cross-platform mobile applications. This framework has made it possible to create native mobile apps for multiple platforms simultaneously. You can develop full-blown mobile applications for both iOS and Android using a single language, i.e., JavaScript. This is a huge advantage, as it saves a lot of time and money and also eliminates the steep learning curves that are associated with each platform’s native development language (Java or Kotlin for Android, and C or C++ for iOS).

Currently, there are two ways you can build React native apps, either using the react-native-cli or by using Expo which also provides a cli tool and is a very good alternative

### React Native CLI
- React native CLI which provides you with the react-native init command, this generates a plain react native project for you with separate native projects for iOS and Android platforms.
- You can modify the native projects as you want writing native code for each platform. For eg. a very generic use case is that you may want to integrate an Analytics SDK into your app, for that you can you actually use the native iOS and Android projects and integrate your SDK as you want writing the native code.
- The major downside for this is that you need to setup build chains for both platforms on your system. For Android you will need Android Studio and for iOS you will need to setup Xcode so that you can build and test on your devices. That is specially cumbersome for someone who is not aware of these tools and build systems, specially when building for production.

### Expo SDK and CLI
- Expo is a free and open source project which provides developers with a toolchain built around React Native, that helps building native iOS and Android apps faster using just JavaScript and React.
- The major plus which falls into the favour of using create-react-native-app cli is that it takes away the need to setup separate build chains for iOS and Android on your system. Expo provides an inbuilt build chain which works well for building and testing on both iOS and Android devices.
- Along side that, Expo SDK provides access to tons of native API's for which you would otherwise need to use a module or write your own. Expo is an exceptional tool for someone who is just getting started with React Native as it takes off all the complexity while builing a React Native app.
- The only downside to using Expo is that you cannot extend the native functionality while writing your app. Which means, if you wish to integrate a third party native library or extend app functionality with native code, then you simply cannot do it. This is because Expo projects do not reveal the native iOS and Android projects that react-native cli does.

### TO-Do app using EXPO-CLI

- 1. ```npm install expo-cli --global``` or ```npm install -g expo-cli``
- 2. ```expo init todo-app``` Need to use ```cmd``` for ```cli``` commands not ```git bash```. <br>
        If want to use ```git bash``` you need to pass 2 arguments: name and template <br>
        ```expo init <project-name> --template <one-of-the-predefined-templates> --name <AppName>```<br>
        For e.g. to create todo-app using ```git bash``` enter <br>
        ```expo init todo-app --template blank --name TodoApp```

- 3. ```cd todo-app```
- 4. ```npm start```

- After ```npm start``` the development server will start running, and a new tab will open in your web browser with the Expo manager screen.

- There are two ways you can now preview the application: <br>
    - You can either run the app on an Android emulator, which you can get by installing Android Studio on the computer.
    - Or, you can install the Expo application on your phone and scan the QR code to run the application on the phone. The To-do app will load and will update as you make changes in the code.

### Create Components of the App
- Similar to React, everything here is a component. Everything you see here is a separate component that has been combined to create a complete mobile application. The following are the components that we will be creating for this application:
- ```App```
    - This component will act as a container for all the other components to come together and provide a complete application
- ```Header```
    - As the name suggests, this component will be the header of the mobile application
- ```Display Image```
    - This component is used here to display the image on the main screen
- ```To-do Item```
    - Each task added is a separate component 
- ```To-do Input```
    - This component is used to add tasks to the application
