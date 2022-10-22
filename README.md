![Image](https://github.com/enditabaku/stog/blob/master/assets/Images/stog-logo-transparent.png)

=====

## How to run the project

* get source code as a zip file or clone it using: git clone https://github.com/enditabaku/stog.git
* type in the project terminal: npm i and after that: expo start
* there are two options to open the project: in an emulator or in your mobile device

** to run it in an emulator use Android Studio

** to access it in your mobile device you should firstly download Expo app in your device
   after Expo is installed, scan the generated QR code.
   no matter what OS you are using the app will be opened in seconds and that's it!!! 


## Built With

* [React Native](https://reactnative.dsev/)
* [Expo](https://expo.dev/)

## Project Structure

There are 6 important things you need to know about the project structure:
* App.js file 
* package.json file
* 6 main folders (assets, components, contexts, navigators, screens and utils)  

======= 

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

## Notes

>>>>>>> The project is in development process so some data can be static also some functionalities are missing

## THIS PROJECT WAS CREATED FOR THE TECHFEST HACKATHON BY PRAGMATIC TEAM
