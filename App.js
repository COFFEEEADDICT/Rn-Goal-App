import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals([...courseGoals, enteredGoal]);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderWidth: 1,
		padding: 10,
	},
});
