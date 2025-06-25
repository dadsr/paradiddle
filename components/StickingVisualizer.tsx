import React, { JSX } from "react";
import { StyleSheet } from "react-native";
import { Card, Surface, Text } from "react-native-paper";
import { limbVisualizerProps } from "@/modals/types";

export default function StickingVisualizer({
                                               currentLimb,
                                               isPlaying,
                                               isKicks,
                                           }: limbVisualizerProps): JSX.Element {

    const isActive = (limb: string) =>
        isPlaying && (currentLimb === limb || currentLimb === "RL");

    return (
        <Card style={styles.container}>
            <Card.Title title="Visual" />
            <Card.Content>

                <Card style={isActive("R") ? styles.activeCard : styles.inactiveCard}>
                    <Card.Title title="Right Hand" />
                    <Card.Content>
                        <Surface style={[styles.surface, isActive("R") && styles.activeSurface]}>
                            <Text style={styles.limbText}>R</Text>
                        </Surface>
                    </Card.Content>
                </Card>

                {/* Left Hand */}
                <Card style={isActive("L") ? styles.activeCard : styles.inactiveCard}>
                    <Card.Title title="Left Hand" />
                    <Card.Content>
                        <Surface style={[styles.surface, isActive("L") && styles.activeSurface]}>
                            <Text style={styles.limbText}>L</Text>
                        </Surface>
                    </Card.Content>
                </Card>

                {/* Kicks */}
                {isKicks && (
                    <>
                        {/* Right Kick */}
                        <Card style={isActive("RK") ? styles.activeCard : styles.inactiveCard}>
                            <Card.Title title="Right Kick" />
                            <Card.Content>
                                <Surface style={[styles.surface, isActive("RK") && styles.activeSurface]}>
                                    <Text style={styles.limbText}>RK</Text>
                                </Surface>
                            </Card.Content>
                        </Card>

                        {/* Left Kick */}
                        <Card style={isActive("LK") ? styles.activeCard : styles.inactiveCard}>
                            <Card.Title title="Left Kick" />
                            <Card.Content>
                                <Surface style={[styles.surface, isActive("LK") && styles.activeSurface]}>
                                    <Text style={styles.limbText}>LK</Text>
                                </Surface>
                            </Card.Content>
                        </Card>
                    </>
                )}
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
    },
    activeCard: {
        marginVertical: 4,
        borderWidth: 2,
        borderColor: "#1976d2",
        backgroundColor: "#e3f2fd",
    },
    inactiveCard: {
        marginVertical: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
    },
    surface: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        marginBottom: 4,
        elevation: 2,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    activeSurface: {
        elevation: 6,
        backgroundColor: "#bbdefb",
    },
    limbText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1976d2",
    },
});
