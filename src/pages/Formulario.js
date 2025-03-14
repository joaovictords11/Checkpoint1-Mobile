import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from "react-native";

const Formulario = ({ navigation }) => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorOriginal, setValorOriginal] = useState("");
  const [percentualAumento, setPercentualAumento] = useState("");

  const calcularNovoValor = () => {
    if (!nomeProduto || !valorOriginal || !percentualAumento) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const valorOriginalNum = parseFloat(valorOriginal);
    const percentualAumentoNum = parseFloat(percentualAumento);
    
    if (isNaN(valorOriginalNum) || isNaN(percentualAumentoNum)) {
      Alert.alert("Erro", "Digite valores numéricos válidos.");
      return;
    }

    const valorAumento = (valorOriginalNum * percentualAumentoNum) / 100;
    const novoValor = valorOriginalNum + valorAumento;

    navigation.navigate("Resultado", { nomeProduto, valorOriginalNum, percentualAumentoNum, valorAumento, novoValor });
  };

  return (
    <ImageBackground source={require("../images/background.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Preço</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor Original"
          keyboardType="numeric"
          value={valorOriginal}
          onChangeText={setValorOriginal}
        />
        <TextInput
          style={styles.input}
          placeholder="Percentual de Aumento"
          keyboardType="numeric"
          value={percentualAumento}
          onChangeText={setPercentualAumento}
        />
        <TouchableOpacity style={styles.button} onPress={calcularNovoValor}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Formulario;