import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View
} from "react-native";

export default function SignIn() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView
            className={`flex-1 ${isDark ? "bg-[#121212]" : "bg-white"
                }`}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            style={{ zIndex: 1 }}
        >
            <View
                className={`flex-1 justify-center px-6 ${isDark ? "bg-[#121212]" : "bg-white"
                    }`}
            >
                {/* Logo ou Título */}
                <Text
                    className={`text-4xl font-nunitoBold mb-8 ${isDark ? "text-white" : "text-[#042857]"
                        }`}
                >
                    Bem-vindo
                </Text>

                {/* Campo de Email */}
                <Text className={`text-sm font-nunito mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    E-mail
                </Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor={isDark ? "#555" : "#aaa"}
                    className={`h-14 px-4 mb-6 rounded-xl ${isDark ? "bg-[#1E1E1E] text-white" : "bg-[#F0F4FA] text-[#042857]"
                        }`}
                />

                {/* Campo de Senha */}
                <Text className={`text-sm font-nunito mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Senha
                </Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    secureTextEntry
                    placeholderTextColor={isDark ? "#555" : "#aaa"}
                    className={`h-14 px-4 mb-8 rounded-xl ${isDark ? "bg-[#1E1E1E] text-white" : "bg-[#F0F4FA] text-[#042857]"
                        }`}
                />

                {/* Botão de Entrar */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    className={`h-14 rounded-xl items-center justify-center mb-4 ${isDark ? "bg-[#579AF2]" : "bg-[#3088F9]"
                        }`}
                >
                    <Text className="text-lg font-nunitoBold text-white">Entrar</Text>
                </TouchableOpacity>

                {/* Link de Esqueci Senha */}
                <TouchableOpacity activeOpacity={0.6} className="flex-row items-center justify-start">
                    <Text className={`font-nunito text-sm ${isDark ? "text-gray-400" : "text-[#042857]"
                        }`}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                {/* Barra de “ou” */}
                <View className="flex-row items-center my-8">
                    <View className="flex-1 h-[1px] bg-gray-300" />
                    <Text className={`px-4 text-sm font-nunito ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                        ou entre com
                    </Text>
                    <View className="flex-1 h-[1px] bg-gray-300" />
                </View>

                {/* Botões de Login Social */}
                <View className="flex-row justify-between">
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className={`flex-1 h-14 rounded-xl items-center justify-center mr-2 ${isDark ? "bg-[#1877F2]" : "bg-[#4267B2]"
                            }`}
                    >
                        <View className="flex-row items-center justify-center gap-2">
                            <Image
                                source={require("../../assets/icons/google.png")}
                                className="w-4 h-4"
                                resizeMode="cover"
                                tintColor={"#fff"}
                            />
                            <Text className="font-nunitoBold text-white">Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className={`flex-1 h-14 rounded-xl items-center justify-center ml-2 ${isDark ? "bg-[#000]" : "bg-[#000]"
                            }`}
                    >
                        <View className="flex-row items-center justify-center gap-2">
                            <Image
                                source={require("../../assets/icons/apple-logo.png")}
                                className="w-4 h-4"
                                resizeMode="cover"
                                tintColor={"#fff"}
                            />
                            <Text className="font-nunitoBold text-white">Apple</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Rodapé - Link para Criar Conta */}
                <View className="flex-row justify-center mt-8">
                    <Text className={`font-nunito text-sm ${isDark ? "text-gray-400" : "text-gray-700"
                        }`}>
                        Não tem conta?{" "}
                    </Text>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text className={`font-nunitoBold text-sm ${isDark ? "text-white" : "text-[#042857]"
                            }`}>
                            Registre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
