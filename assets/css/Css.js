import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8DCC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  container2: {
    flex: 1,
    backgroundColor: '#8DCC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '50%',
    height: 40,
    backgroundColor: '#3CB394',
    borderRadius: 20,
    paddingLeft: 30,
    marginBottom: 15
  },
  btnEntrar: {
    width: "30%",
    height: 30,
    borderRadius: 20,
    fontWeight: "bold",
    backgroundColor: '#8FBC',
    justifyContent: 'center'
  },
  chamada: {
    fontSize: 30,
    marginBottom: 100,
    fontWeight: "bold",
    textAlign: 'center'
  },
  chamada2: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#3CB394',
    height: 50,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
  },
  error: {
    color: "#FF0000",
    fontSize: 14,
    textAlign: "center",
  },
  btnHist: {
    width: "30%",
    height: 30,
    borderRadius: 20,
    backgroundColor: '#8FBC',
    justifyContent: 'center',
    marginBottom: 15,
  },
  FlatList: {
    width: "100%",
    height: 100,
  },
  item2: {
    backgroundColor: '#3CB394',
    height: 60,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  }
});
export { css };