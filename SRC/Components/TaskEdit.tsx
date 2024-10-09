import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface TaskEditProps {
  task: string;
  onSave: (editedTask: string) => void;
}

const TaskEdit: React.FC<TaskEditProps> = ({ task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  return (
    <View>
      <TextInput
        value={editedTask}
        onChangeText={setEditedTask}
        placeholder="Edit task"
      />
      <Button title="Save" onPress={() => onSave(editedTask)} />
    </View>
  );
};

export default TaskEdit;
