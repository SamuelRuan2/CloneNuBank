import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  flexColum: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

  },
  header: {
    display: "none",

  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 30,
    width: "50%",
    marginBottom: 10,
    position: "fixed",
    marginTop: "90vh",
    backgroundColor: "background: rgba(255, 255, 255, 0.9)",


  },
  itensFooter: {
    marginTop: 10,
    marginBottom: 10,


  },
  page2: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "15%",
    marginRight: "15%",
  },
  iconsFooter: {
    height: "25px",
    width: "25px",
    resizeMode: 'conteiner',

  },
  backgroundtela3: {

    backgroundColor: "linear-gradient(90deg, rgba(130,10,209,1) 19%, rgba(107,184,199,1) 100%)",
    borderRadius: 15,
    width: "100%",
    marginTop: 30,

  },
  tela3: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
    resizeMode: 'conteiner',
    width: "90%",
    display: "flex",

  },
  Bntareapix: {
    alignItems: 'center',
    marginRight: 20,
  },

  AreapixIcon: {
    height: 70,
    width: 70,
    backgroundColor: '#e6e6e6',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

  },

  Textbntpix: {
    fontWeight: 700,
    fontSize: 14,
  },
  Areapixbnts: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",


  },
  Areapixbnt: {
    flexDirection: "row",
    margin: 10,
  },
  Areapix: {
    flex: 1,
    display: "flex",
  },
  Divtitlepix: {
    backgroundColor: "#820AD1",
    width: "100vw",
    height: "8%",
    justifyContent: "center",
  },
  txttitlepix: {
    fontWeight: 600,
    fontSize: 25,
    color:"#FFFFFF",
    marginLeft:10,
       
        
    },


})
export default styles