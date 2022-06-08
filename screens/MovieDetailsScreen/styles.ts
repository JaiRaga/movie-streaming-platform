import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: 'cover'
  },
  details:{
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  matchYear: {
    flexDirection: 'row'
  },
  match: {
    color: "#00cc22",
    fontWeight: 'bold',
    marginRight: 5
  },
  year: {
    color: "#757575",
    marginRight: 5
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5
  },
  age: {
    color: 'black',
    fontWeight: 'bold'
  },
  playBtn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5
  },
  playBtnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  downloadBtn: {
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5
  },
  downloadBtnText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  downloadIcon: {
    marginRight: 5
  },
  plot: {
    marginVertical: 10
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  plusIcon: {
    alignItems: 'center',
    marginHorizontal: 26
  },
  iconText: {
    color: 'grey',
    marginTop: 5
  },
  picker: {
    color: 'white',
    width: 130
  }
})

export default styles