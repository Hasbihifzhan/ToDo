import { 
    FlatList, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../components/HeaderCustom'
import Icon from 'react-native-vector-icons/FontAwesome6';
import Fallback from '../components/Fallback';

// INI BAGIAN LOGIC

const Todo = () => {
    // init local states
    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);
    const[editedTodo, setEditedTodo] = useState(null);

    // handle add todo
    const handleAddTodo = () => {
  
    if(todo === "") {
      return;
    }
  
    setTodoList([...todoList, {id: Date.now().toString(), title: todo }]);
    setTodo("");
  
    };

    // Handle Delete
    const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
  
    setTodoList(updatedTodoList);
  
    };

    // Handle Edit
    const handleEditTodo = (todo) => {

        setEditedTodo(todo);
        setTodo(todo.title);
        
    };

    // Handle Update
    const handleUpdateTodo = () => {

        const UpdatedTodos = todoList.map((item) => {
          if(item.id === editedTodo.id){
            return{...item, title: todo};
          }
      
          return item
         
        })
        setTodoList(UpdatedTodos);
        setEditedTodo(null);
        setTodo("");
      
      };


    // render todo
    const renderTodos = ({item, index}) => {
        return(
            <View style={{
                margin: 4,
                marginTop: 10,
                backgroundColor: '#77CDFF', 
                borderRadius: 6, 
                paddingHorizontal: 5,
                paddingVertical: 13,
                flexDirection: 'row',
                alignItems: 'center'              
            }}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 800, flex: 1}}
                >{item.title}</Text>

            const myIcon1 = <Icon 
            name = 'pencil'
            size = {20} 
            color = '#fff'
            marginHorizontal = {7}
            onPress = {() => handleEditTodo(item)}      
            />

            const myIcon1 = <Icon 
            name = 'trash-can' 
            size = {20} 
            color = '#fff' 
            marginHorizontal = {10}
            onPress = {() => handleDeleteTodo(item.id)}       
            />

        </View>
        )
    }

// INI BAGIAN UI / DESIGN

    return (
        <View style={{
            flex: 1, 
            backgroundColor: '#BCF2F6'
            }}
            >

            {/* Header */}
            <HeaderCustom title = 'To Do List' headerColor = '#0D92F4'/>

            {/* Render Todo List */}
            <FlatList data = {todoList} renderItem = {renderTodos} />

            {
              todoList.length <= 0 && <Fallback/>
            }

            {/* List */}
            <View style={{
                flex: 1, 
                backgroundColor: '#BCF2F6'
            }}
            >
            </View>

            {/* Input Box */}
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 12
                }} 
                >

                {/* Input to do */}
                <TextInput 
                style={{
                    backgroundColor: '#fff',
                    width: 260,
                    borderWidth: 2,
                    borderColor: '#0D92F4',
                    borderRadius: 6,
                }}
                
                placeholder = 'Add task' 
                value = {todo}
                onChangeText = {(userText) => setTodo(userText)}

                />

                {/* Button Send */}
                {
                editedTodo ? ( 
                <TouchableOpacity style={{
                    height: 45, 
                    width: 100, 
                    backgroundColor: '#0D92F4', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderRadius: 5
                    }}
                    onPress = {() => handleUpdateTodo()}
                    >
                    <Text style={{color:'#fff'}}>
                        Save
                    </Text>
                </TouchableOpacity>
                ):(
                <TouchableOpacity style={{
                    height: 45, 
                    width: 100, 
                    backgroundColor: '#0D92F4', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderRadius: 5
                    }}
                    onPress = {() => handleAddTodo()}
                    >
                    <Text style={{color:'#fff'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
                )}

            </View>
        </View>
    )
}

export default Todo