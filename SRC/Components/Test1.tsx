// this is a proptype version of the app that i will edit and change 
// import React from 'react';
// import { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';


// interface isEdiTableScreen{
//     navigation?:any;
// };

// const editableScreen = (props: isEdiTableScreen) => {
//     // const navigateToSecondScreen = () => {
//     //     props.navigation.navigate('TodoList', { 
//     //       param1: '' 
//     //     });
//     //   };

     
//     return(
//         <View style= {styles.editableView}>
//             <Button
//                 title='Edit'
//                 onPress={editableTab}></Button>
//             <Button
//             title='Delete'
//             onPress={navigateToSecondScreen}/>

//         </View>
//     );
// };

// const TodoList1 = (props: isEdiTableScreen) => {
//     const [tasks, setTasks] = useState<string[]>([]);
//     const [newTask, setNewTask] = useState('');
//     const [isEditing, setIsEditing] = useState(false);
//     const [editIndex, setEditIndex] = useState(-1);
//     const navigation = useNavigation();
//     interface FlatList
//     const editableScreen = () => props.navigation.navigate('editableScreen');

//     const navigateToSecondScreen = (FlatList) => {
//         props.navigation.navigate('editableScreen', { 
//           param1: 
//         });

  
//     const addTask = () => {
//       if (newTask.trim() !== '') {
//         if (isEditing) {
//             const updatedTasks = [...tasks];
//             updatedTasks[editIndex] = newTask;
//             setTasks(updatedTasks);
//             setIsEditing(false);
//             setEditIndex(-1);
//           } else {
//             setTasks([...tasks, newTask]);
//           }
//         setNewTask('');
//       }
//     };

//     const editTask = (index: number) => {
//         setIsEditing(true);
//         setEditIndex(index);
//         setNewTask(tasks[index]);
//     };

//     const removeTask = (index: number) => {
//         setTasks(tasks.filter((_, i) => i !== index));
//     };

//     return (
//         <View style={{ padding: 16 }}>
//           <TextInput
//             value={newTask}
//             onChangeText={setNewTask}
//             placeholder="Enter a new task"
//             style={{ padding: 8, borderWidth: 1, borderRadius: 4 }}
//           />
//           <Button title="Add Task" onPress={addTask} />
//           <FlatList
//             data={tasks}
//             renderItem={({ item, index }) => (
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:   
//      8 }}>
//                 <Text style={{ fontSize: 16 }}>{item}</Text>
//                 <TouchableOpacity
//                 onPress={navigateToSecondScreen}>
//                     <Image 
//                      source={require('../Assests/Icons/options.jpg')} />
//                 </TouchableOpacity>
//                 {/* <Button title="Edit" onPress={() => editTask(index)} />
//                 <Button title="Remove" onPress={() => removeTask(index)} /> */}
//               </View>
//             )}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     editableView : {
//         height:200,
//         width:200,
//     },

// });

// export default TodoList1;
    