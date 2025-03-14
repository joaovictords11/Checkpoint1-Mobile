import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Resultado = ({ route }) => {
  const { nomeProduto, valorOriginalNum, percentualAumentoNum, valorAumento, novoValor } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.resultText}>Produto: {nomeProduto}</Text>
      <Text style={styles.resultText}>Valor Original: R$ {valorOriginalNum.toFixed(2)}</Text>
      <Text style={styles.resultText}>Percentual de Aumento: {percentualAumentoNum}%</Text>
      <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
      <Text style={styles.resultText}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Resultado;
