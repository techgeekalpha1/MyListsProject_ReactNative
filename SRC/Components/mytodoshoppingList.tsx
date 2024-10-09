import React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, TextInput, Button,  TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color, font } from '../Helpers/Constant';

interface Tasks {
    Id: string;
    Title: string;
    Description: string;
    Completed: boolean;
  }
  
  const TodoShopList: React.FC = () => {
    const [task, setTask] = useState<Tasks[]>([]);
    const [NewTaskTitle, SetNewTaskTitle] = useState('');
    const [EditingTask, SetEditingTask] = useState<Tasks   
   | null>(null);
   const [SearchQuery, SetSearchQuery] = useState('');
   const [filteredTasks, SetFilteredTasks] = useState<Tasks[]>(task);

  
    useEffect(() => {
      const loadTasks = async () => {
        const storedTasks = await AsyncStorage.getItem('task');
        if (storedTasks) {
          setTask(JSON.parse(storedTasks));   
        }
      };
      loadTasks();
    }, []);
  
    const CreateTask = () => {
      if (NewTaskTitle.trim() === '') {
        return;
      }
      const newTask: Tasks = {
        Id: Date.now().toString(),
        Title: NewTaskTitle,
        Description: '',
        Completed: false,
      };
      const UpdatedTasks = [...task, newTask];
      setTask([...task, newTask]);
      SetNewTaskTitle('');
      SaveTasks(UpdatedTasks);
    };
  
    const EditTask = (task: Tasks) => {
      SetEditingTask(task);
    };
  
    const SaveEditedTask = () => {
      if (EditingTask) {
        const UpdatedTasks = task.map((t) =>
          t.Id === EditingTask.Id ? { ...t, Title: EditingTask.Title } : t
        );
        setTask(UpdatedTasks);
        SetEditingTask(null);
        SaveTasks(UpdatedTasks);
      }
    };
  
    const DeleteTask = (id: string) => {
      const UpdatedTasks = task.filter((t) => t.Id !== id);
      setTask(UpdatedTasks);
      SaveTasks(UpdatedTasks);
    };
  
    const SaveTasks = async (tasksToSave: Tasks[]) => {
        try {
          await AsyncStorage.setItem('task', JSON.stringify(tasksToSave));
        } catch (error) {
          console.error('Failed to save tasks:', error);
        }
      };
      const filterTasksByTitle = () => {
        const filtered = task.filter(task => task.Title.toLowerCase() === SearchQuery.toLowerCase());
        SetFilteredTasks(filtered);
      };
    return (
      <View>
        <View>
          <ImageBackground style={styles.searchTab}
          source={require('../Assests/Images/bottomimg.png')}>
            <TextInput
              style={styles.inputText}
              value={SearchQuery}
              onChangeText={SetSearchQuery}
              placeholder="Search task by title"
              placeholderTextColor={color.white}
            />
            <View>
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
          value={NewTaskTitle}
          onChangeText={SetNewTaskTitle}
          placeholder="Enter task title"
          placeholderTextColor={color.white}
        />
        <Button title="Create Task" onPress={CreateTask} />

        {task.map((task) => (
        <View style={styles.taskBox}
        key={task.Id}>
          {EditingTask?.Id === task.Id ? (
            <TextInput
             style={styles.inputText}
              value={EditingTask.Title}
              onChangeText={(text) =>
                SetEditingTask({ ...EditingTask, Title: text })
              }
              placeholder="Edit task title"
              placeholderTextColor={color.white}
            />
            ) :
            (
              <Text
              style={styles.displayText}>{task.Title}</Text>
            )}
            <View 
             style={styles.editableButton}>
              <TouchableOpacity
              onPress={() => EditTask(task)}>
                <Image
                style={styles.editableImg}
                source={require('../Assests/Icons/editIcon.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => DeleteTask(task.Id)}>
                <Image
                  style={styles.deleteImg}
                  source={require('../Assests/Icons/delete.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        {EditingTask && (
        <Button title="Save" onPress={SaveEditedTask} />
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
  },
  displayText:{
    fontFamily:font.Regular,
    fontSize:17,
    color:color.white,
    paddingHorizontal:8,
  },

  searchImgHolder:{
    flexDirection:'row',
    width:'85%',
    justifyContent:'flex-end',
    marginLeft:5,
    marginTop:15,
    
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
    width:'90%',
    height:25,
    justifyContent:'flex-end',
  },
  deleteImg:{
    resizeMode:'cover',
    height:23,
    width:23,
    // marginLeft:5
    marginLeft:8,
  },
  editableImg:{
    resizeMode:'cover',
    height:23,
    width:23,
    marginBottom:3,
  },
  

});

export default TodoShopList;