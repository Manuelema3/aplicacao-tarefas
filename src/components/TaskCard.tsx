import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';

// Definindo o "contrato" do que o card precisa receber
interface TaskCardProps {
  title: string;
  category: string;
  status: 'Pendente' | 'Concluído';
}

export function TaskCard({ title, category, status }: TaskCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.categoryIndicator} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>

      <Text style={[
        styles.status, 
        { color: status === 'Concluído' ? THEME.COLORS.SUCCESS : THEME.COLORS.DANGER }
      ]}>
        {status}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.WHITE,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row', // Alinha os itens lado a lado
    alignItems: 'center',
    marginBottom: 12,
    // Sombra para dar profundidade (Layout "Top")
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  categoryIndicator: {
    width: 4,
    height: '100%',
    backgroundColor: THEME.COLORS.PRIMARY, // Usa a cor do seu tema
    marginRight: 15,
    borderRadius: 2,
  },
  content: {
    flex: 1, // Faz esse texto ocupar o espaço restante
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.COLORS.TEXT,
  },
  categoryText: {
    fontSize: 12,
    color: THEME.COLORS.GRAY,
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    color: THEME.COLORS.DANGER,
    fontWeight: '600',
  }
});