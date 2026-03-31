import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
// 1. Importamos o Provider e o novo SafeAreaView
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from './src/styles/theme';
import { TaskCard } from './src/components/TaskCard';
import { Input } from './src/components/Input';

export default function App() {
  return (
    // 2. O SafeAreaProvider deve envolver todo o app
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.content}>
          <Text style={styles.headerTitle}>Minhas Tarefas</Text>
          <Input />

        {/* Chamando o componente criado na pasta components */}

        {/* Primeira tarefa: Estudo */}
  <TaskCard 
    title="Estudar TypeScript" 
    category="Estudo" 
    status="Pendente" 
  />

  {/* Segunda tarefa: Trabalho */}
  <TaskCard 
    title="Revisar PRD da ONG" 
    category="Trabalho" 
    status="Concluído" 
  />

  {/* Terceira tarefa: Pessoal */}
  <TaskCard 
    title="Ir à academia" 
    category="Pessoal" 
    status="Pendente" 
  />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, 
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.COLORS.TEXT,
    marginBottom: 20,
  }
});