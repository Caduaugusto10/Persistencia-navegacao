import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function Detalhes() {
  const [persistedText, setPersistedText] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    const fetchPersistedText = async () => {
      const savedText = await SecureStore.getItemAsync("meuTexto");
      setPersistedText(savedText || "Nenhum texto salvo");
    };

    fetchPersistedText();
  }, []);

  const handleSave = async () => {
    if (inputValue.trim()) {
      await SecureStore.setItemAsync("meuTexto", inputValue);
      setPersistedText(inputValue);
      setInputValue("");
    } else {
      alert("Digite algo para salvar!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.subTitle}>
      Persistência: {persistedText}
      </Text>
      <Text style={styles.subTitle2}>
        Persistência: {persistedText}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Text style={styles.saveButton} onPress={handleSave}>
        Salvar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  title: {
    fontSize: 30,
    textDecorationLine: "underline",
  },
  subTitle: {
    fontSize: 20,
    color: "red",
  },
  subTitle2: {
    fontSize: 20,
    color: "green",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "blue",
    padding: 15,
    marginTop: 2,
    width: 300,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
  },
});