import React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color, font } from '../Helpers/Constant';

interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTask, setEditingTask] = useState<Task   | null>(null);
   const [searchQuery, setSearchQuery] = useState('');
   const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  
    useEffect(() => {
      const loadTasks = async () => {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));   
  
        }
      };
      loadTasks();
    }, []);
  
    const createTask = () => {
      if (newTaskTitle.trim() === '') {
        return;
      }
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle,
        description: '',
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      saveTasks(updatedTasks);
    };
  
    const editTask = (task: Task) => {
      setEditingTask(task);
    };
  
    const saveEditedTask = () => {
      if (editingTask && editingTask.title.trim() !== '') {
        const updatedTasks = tasks.map((t) =>
          t.id === editingTask.id ? { ...t, title: editingTask.title } : t
        );
        setTasks(updatedTasks);
        setEditingTask(null);
        saveTasks(updatedTasks);
      }
    };
  
    const deleteTask = (id: string) => {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    };
  
    const saveTasks = async (tasksToSave: Task[]) => {
        try {
          await AsyncStorage.setItem('tasks', JSON.stringify(tasksToSave));
        } catch (error) {
          console.error('Failed to save tasks:', error);
        }
      };
      const filterTasksByTitle = () => {
        const filtered = tasks.filter(task => task.title.toLowerCase() === searchQuery.toLowerCase());
        setFilteredTasks(filtered);
      };
    return (
      <View>
        <View>
          <ImageBackground style={styles.searchTab}
          source={require('../Assests/Images/bottomimg.png')}>
            <TextInput
              style={styles.inputText}
              value={searchQuery}
              multiline={true}
              onChangeText={setSearchQuery}
              placeholder="Search task"
              placeholderTextColor={color.white}
            />
            <View >
              <TouchableOpacity
                style={styles.searchImgHolder}
                onPress={filterTasksByTitle}>
                <Image style ={styles.searchImg}
                source={require('../Assests/Icons/searchIcon.png')}>
                </Image>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <TextInput
          style={styles.inputText}
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
          multiline={true}
          placeholder="Enter New Task Name"
          placeholderTextColor={color.white}
        />
        <Button title="Create Task" onPress={createTask} />
        {tasks.map((task) => (
        <View style={styles.taskBox}
         key={task.id}>
          {editingTask?.id === task.id ? (
            <TextInput
             style={styles.inputText}
             multiline={true}
              value={editingTask?.title?? ''}
              onChangeText={(text) =>
                setEditingTask({ ...editingTask, title: text })
              }
              placeholder="Edit task title"
              placeholderTextColor={color.white}
            />
            ) :
            (
              <Text
              style={styles.displayText}>{task.title}</Text>
            )}
            <View 
             style={styles.editableButton}>
              <TouchableOpacity
              onPress={() => editTask(task)}>
                <Image
                style={styles.editableImg}
                source={require('../Assests/Icons/editIcon.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteTask(task.id)}>
                <Image
                  style={styles.deleteImg}
                  source={require('../Assests/Icons/delete.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        {editingTask && (
        <Button title="Save" onPress={saveEditedTask} />
      )}
      </View>
    );
  };

const styles = StyleSheet.create({
  searchTab:{
    flexDirection:'row',
    height:50,
    width:'100%',
  },
  inputText:{
    fontFamily:font.Regular,
    fontSize:15,
    color:color.white,
    paddingHorizontal:10,
    flexWrap:'wrap',
    width:'60%'
  },
  displayText:{
    fontFamily:font.Regular,
    fontSize:17,
    color:color.white,
    paddingHorizontal:8,
  },

  searchImgHolder:{
    flexDirection:'row',
    width:'40%',
    height:30,
    justifyContent:'flex-end',
    marginLeft:201,
    marginTop:15,
    position:'absolute'
    
  },
  searchImg:{
    resizeMode:'cover',
  },
  taskBox:{
    flexDirection:'row',
    marginTop:15,
    width:'100%',
  },
  editTask:{
    borderWidth: 1,
    borderColor: 'white',
    width:'80%'
  },
  editableButton:{
    flexDirection:'row',
    width:'50%',
    height:25,
    justifyContent:'flex-end',
    position:'absolute',
    marginLeft:300,
  },
  deleteImg:{
    resizeMode:'cover',
    height:23,
    width:23,
    // marginLeft:5
    marginRight:8,
  },
  editableImg:{
    resizeMode:'cover',
    height:23,
    width:23,
    // marginLeft:200
    marginBottom:3,
  },
  

});

export default TodoList;
    