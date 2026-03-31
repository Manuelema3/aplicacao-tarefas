import React, { useState } from 'react'; // Adicionamos o { useState }
//Importei as peças do "Lego" que vou usar
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../styles/theme';

export function Input() {
    // task é o valor atual | setTask é a função que altera o valor
  const [task, setTask] = useState(''); 

  function handleAdd() {
    console.log("Tarefa digitada:", task); // Isso vai aparecer no seu terminal do VS Code!
    setTask(''); // Isso limpa o campo depois que você clica no botão
  }

    return (
        // A View 'container' agrupa o campo de texto e o botão lado a lado
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={THEME.COLORS.GRAY} // Cor do texto de dica
            onChangeText={setTask} // Atualiza a memória a cada letra digitada
            value={task}           // Garante que o input mostre o que está na memória
            />

            {/* TouchableOpacity é um botão que brilha/fica opaco ao clicar */}
            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={handleAdd} // Chama a função ao clicar
            >
             <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

        </View>
  );

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row', // Alinha Input e Botão na mesma linha
    marginBottom: 32,      // Distância para os cards que virão abaixo
  },
  input: {
    flex: 1,               // Faz o input ocupar TODO o espaço restante
    height: 56,
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: THEME.COLORS.TEXT,
    marginRight: 8,        // Espacinho entre o input e o botão +
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY, // Usa a cor azul que definimos no tema
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
  }
});