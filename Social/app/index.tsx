import React, { useRef, useMemo, useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, useColorScheme, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { height } = Dimensions.get("window");

  // Snap points: peek 45%, full screen 100%
  const snapPoints = useMemo(() => ["25%", "100%"], []);

  // Impede que o usuário feche o BottomSheet completamente
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) bottomSheetRef.current?.snapToIndex(0);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? "#01070f" : "#d8e4f7" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: isDark ? "#fff" : "#000", fontSize: 24 }}>Index</Text>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          index={0} // começa na posição mínima (peek)
          snapPoints={snapPoints}
          enablePanDownToClose={false} // não fecha totalmente
          enableOverDrag={true} // permite puxar acima do snap point
          handleIndicatorStyle={{
            backgroundColor: isDark ? "#6f757ec7" : "#04285742",
            width: 45,
            height: 5,
          }}
          backgroundStyle={{
            backgroundColor: isDark ? "#01070f" : "#d8e4f7", // cor igual ao TabBar
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {/* Conteúdo do BottomSheet */}
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: isDark ? "#fff" : "#000", fontSize: 18, textAlign: "center" }}>
                Conteúdo do BottomSheet estilo Shazam!
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
