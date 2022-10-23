![Image](https://github.com/enditabaku/stog/blob/master/assets/Images/stog-.png)

## <b> Stog </b> is a mobile app that creates opportunities to students to get a 0 cost high school education and a secured job afterwards!

## How to run STOG

* Clone the repo: `git clone https://github.com/enditabaku/stog.git`
* Change directory to the downloaded folder: `cd stog`
* Install the neccessary packages: `npm i`
* Run the project: `expo start`

## How to access STOG
After running it, you can easily access STOG in one of the two ways:
### Using an emulator
You can install an emulator such as [Android Studio](https://developer.android.com/studio/). One of the quickest ways to get your hands on the project immediately is by following [this guide](https://stackoverflow.com/a/53358392) which does not require any configuration.

### Using your mobile device
* Install the <b>Expo Go</b> app on your device using [this Google Play link](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) for Android or [this App Store link](https://itunes.apple.com/app/apple-store/id982107779) for iOS devices.
* Scan the QR code:
After running STOG with `expo start`, you'll see a generated QR code on the terminal.
- On Android open the Expo app and scan the QR code from there.
- On iOS open the Camera app and scan the QR code from there.


## Built With

* [React Native](https://reactnative.dsev/)
* [Expo](https://expo.dev/)

<!---
## Project Structure

There are 6 important things you need to know about the project structure:
* App.js file 
* package.json file
* 6 main folders (assets, components, contexts, navigators, screens and utils)  

   App.js file
   
It contains the first steps when the project is opened: checks for the stored credentials (if any) and opens the first screen from the RootStack: Login Screen
    
   Package.json file
    
It contains an object with the main project information, such as project name, project version, scripts to run the project and dependencies (packages installed) for the project
    
   Main Folders
    
    * Assets => Two folders, images and fonts that are used in the project
    * Components => It contains global components for the project, in such case the global styles used
    * Contexts => Contains the Credential Context to store and/or remove credentials when user logs in or out
    * Navigators => The RootStack.js file, lists and groups the navigation stack that is going to be used.
                     In more details, it has two main separations: The Stack Navigator with the Welcome/Login screen and the group of all screens after user logs in (screens that are accessible only if loggedin)         
    * Screens => The screens folder has subfolders named after project screen. Each subfolder has an index.js file which is
                  the main file to render the screen and it may also contain a child folder named components which includes components created only for that screen (not global)              
    * Utils => It has subfiles that are used in the project for utilization and also as helpers globally. The responsiveSize  
               file creates responsive font size and element size that are responsive for different screen resolutions. The globalStyles exports global backdrop shadows. 
 --->
#### The project is still in development and if some functionalities are missing, we're working on it!
### Built with ❤️ for TechFest Hackathon Albania by the Pragmatic Team.
