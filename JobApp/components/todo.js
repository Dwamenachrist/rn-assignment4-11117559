import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import Popular from "./taskData";

const Todo = () => {
  return (
    <View style={styles.todoHeadContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <Text style={styles.headerLink}>See all</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Popular}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator} />
        )}
        renderItem={({ item }) => (
          <View style={styles.jobItemContainer}>
            <Image source={item.logo} style={styles.jobLogo} />
            <View style={styles.jobDetailsContainer}>
              <Text style={styles.jobTitle}>{item.Jobtitle}</Text>
              <Text style={styles.companyName}>{item.company}</Text>
            </View>
            <View style={styles.jobSalaryContainer}>
              <Text style={styles.jobSalary}>{item.salary}</Text>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoHeadContainer: {
    marginVertical: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerLink: {
    color: "#95969D",
    marginLeft: "auto",
  },
  jobItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    margin: 9,
  },
  jobLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  jobDetailsContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 14,
    color: "#555",
  },
  jobSalaryContainer: {
    alignItems: "flex-end",
  },
  jobSalary: {
    fontSize: 14,
    fontWeight: "500",
  },
  jobLocation: {
    fontSize: 12,
    color: "#888",
  },
  itemSeparator: {
    height: 10,
  },
});
