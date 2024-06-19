import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 16,
  },
  map: {
    width: '80%',
    height: 200,
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 5,
    fontSize: 30,
    backgroundColor: 'transparent',
  },
  btn: {
    width: '80%',
    backgroundColor: 'orange',
    padding: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  btnTxt: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  thumbnailContainer: {
    width: 100,
    height: 100,
    marginVertical: 8,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    backgroundColor: 'lightgrey',
    width: '100%',
    fontSize: 24,
    textAlignVertical: 'top',
    paddingHorizontal: 8,
    maxWidth: '100%',
    maxHeight: 96,
  },
});

export { styles };
