import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppBottomSheet, { AppBottomSheetRef } from "../components/AppBottomSheet";
import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";

export default function WalletScreen() {
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
        <Text>Minha tela Wallet</Text>

        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.expand()}
          style={{
            marginTop: 20,
            backgroundColor: "#3088f9",
            padding: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff" }}>Abrir BottomSheet</Text>
        </TouchableOpacity>

        <AppBottomSheet ref={bottomSheetRef}>
          <Text>Conteúdo do BottomSheet</Text>
        </AppBottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
