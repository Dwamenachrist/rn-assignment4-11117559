import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from "react-native";
import JobData from "./JobData";

const Job = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.categoryhead}>Featured Jobs</Text>
        <Text style={{ color: "#95969D", marginLeft: "auto" }}>See all</Text>
      </View>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal={true}
          style={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
        >
          {JobData.map((category) => (
            <View key={category.Jobtitle} style={styles.categoryItem}>
              <ImageBackground 
                source={require("../assets/rectangle.png")}
                style={[styles.categorybackground, {backgroundColor: category.color}]}
              > 
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={category.logo}
                        style={[
                          styles.categorylogo,
                          { width: category.logoWidth, height: category.logoHeight }
                        ]}
                      />
                    </View>
                    <View style={styles.CompanyTitle}>
                      <Text style={styles.categoryName}>{category.Jobtitle}</Text>
                      <Text style={styles.companyName}>{category.company}</Text>
                    </View>
                  </View>
                  <View style={styles.salaryBottom}>
                    <Text style={styles.categorysalary}>{category.salary}</Text>
                    <Text style={styles.categorylocation}>{category.location}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
  categorybackground: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  categoryhead: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoriesContainer: {
    width: "120%",
    height: 186,
    marginVertical: 10,
  },
  categoryItem: {
    borderRadius: 25,
    borderColor: "#e0e0e0",
    width: 270,
    height: 186,
    marginRight: 20,
    backgroundColor: "#ffff",
    justifyContent: "space-between",
  },
  categoryName: {
    fontSize: 19,
    marginBottom: 5,
    color: '#ffff',
  },
  companyName: {
    fontSize: 13,
    color: '#ffff',
  },
  CompanyTitle: {
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  categorylogo: {
    resizeMode: "cover",
  },
  categorysalary: {
    fontSize: 14,
    color: '#ffff',
  },
  categorylocation: {
    fontSize: 15,
    color: '#ffff',
  },
  salaryBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 80,
  },
});

export default Job;