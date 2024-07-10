import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COULEURS } from "../Constante/Couleur";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COULEURS.white,
      }}
    >
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.contentViewBtn}>
          <View style={styles.contentView}>
            <TouchableOpacity
              style={[styles.contentBtn, { backgroundColor: "orange" }]}
            >
              <MaterialCommunityIcons
                name="video"
                size={30}
                color={COULEURS.white}
              />
            </TouchableOpacity>
            <Text style={styles.txtBtn}>Nouvelle reunion</Text>
          </View>
          <View style={styles.contentView}>
            <TouchableOpacity style={[styles.contentBtn]}>
              <MaterialCommunityIcons
                name="plus"
                size={30}
                color={COULEURS.white}
              />
            </TouchableOpacity>
            <Text style={styles.txtBtn}>Participer          .</Text>
          </View>
          <View style={styles.contentView}>
            <TouchableOpacity style={[styles.contentBtn]}>
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                color={COULEURS.white}
              />
            </TouchableOpacity>
            <Text style={styles.txtBtn}>Programmer          .</Text>
          </View>
          <View style={styles.contentView}>
            <TouchableOpacity style={[styles.contentBtn]}>
              <MaterialCommunityIcons
                name="plus"
                size={30}
                color={COULEURS.white}
              />
            </TouchableOpacity>
            <Text style={styles.txtBtn}>loren Ipsum torrent</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentViewBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  contentView: {
    width: "22%",
    height: 115,
  },
  contentBtn: {
    flexGrow: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COULEURS.primary,
  },
  txtBtn: {
    fontSize: 13,
    fontWeight: "800",
  },
});
