This is a new [**React Native**] Todo List project by Vaibhav called MyLists using react native . 


# Getting Started

i made the framework of this application using the react native init app_name cmd . this gave me the bareframework of this app . on which i made my screen according to the wireframe i made in figma . 

# making the app.tsx file . 
the app.tsx file is my main app file in which all the app components like scrrens return the jsx element specified in them according to the arguments passed . i also used navigation method which pass the name of the screen as arguments and return the file path. 
the app.tsx file also consists of a launch screen component . 
which contains a parent container component which has 1 child a touchable opcacity component and that touchable opacity has a child view which has a child footer . 
the touchable component has a method onpress which on pressing navigates u to the home screen . 
# HomeScreen
the homescreen contains of 1 parent tag called container . which has 2 children namely 2 views. one view holds the main todolist component which consists of 7 methods to load / create / edit/ save edit / delete / save and filter tasks respectively. this tag imports the todo list compoent allowing us to make our tasks . 
the bottom nav consists of a img background which is overlayed by 2 buttons the home and shop screen . which when clicked allow us to navigate to that screen . 
# ShopScreen 
is entirely identicle to the main screen execpt the main screen execpt it has a different list to keep track of the tasks unique to this screen 
# TodoList and TodoShopingList 
it consists of 7 methods 
the  UseEffect hook is set up to load tasks from AsyncStorage when the component mounts. It uses an asynchronous function loadTasks to fetch the stored tasks. If tasks are found, it parses them from JSON format and sets the state tasks with the parsed tasks. This ensures that any tasks previously stored in AsyncStorage are loaded when the component first renders
the createTask method first checks if there are any whitespaces if there are it returns back. the newTask method creates a  new task object with a unique ID (using Date.now().toString()), the title from newTaskTitle, an empty description, and a completed status set to false. then the new task is added to the existing list of tasks, creating updatedTasks.The state tasks is updated with the new list of tasks.The newTaskTitle is reset to an empty string, clearing the input field.The updated list of tasks is saved using the saveTasks function.

the edit method changes the title of the specified task when the edit icon is pressed . the edit button passes a parameter task of property task . this paramater is the value of a method nested inside the edit method . the setEditing method tasks that task state and applies it on to editing task meaning the property value pair of task ( whose edit button was clicked which caused the editTask method to be activated) were given to editingTask. this then causes a text input to open up in which we change the value of the title of the  task then this title gets passed to setEditing method when then updates the state of the editingTask property meaning the title gets updated . to commit the changes we use the saveEditied task method 

the saveEditiedTask method first checks for blank spaces if the title only has blank spaces it will return early and do nothing . if there is a non null value in editingTask it will create a new array updatedlists which will overlap the original array. the updated task whos id = editingTask will have its title updated 
then the updated array will have state passed to the tasks array and the updated array would be saved using the save task func and the setEditingTask method sets the editingTask value to null to end editing . 

the delete task method is much more simpler when compared to edit methods . the delete task method uses the updated array and u only passes the tasks in that array whos id =/ the id of the task being passed . 
hence removing that task from the array . then the updated task array gets saved  
and the task array gets updated to match the values of the updatedTask array . 

the save task is what allows the updatesTask array / the task array , etc to be stored on devices . we pass an argument task to the propery taskstosave which hods the data of task . this method consits of try block to either succesfully carry out the code or catch th errors . 
Within the try block, AsyncStorage.setItem is used to save the tasksToSave array in the device's local storage. The array is converted to a JSON string before being stored.
If the setItem operation fails, the catch block will log an error message to the console.

after everything is set and done we use the filter tasks method to search and display tasks

and the above are the details of how my project work . 
<!-- To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native. -->
