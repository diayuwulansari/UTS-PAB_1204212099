import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Image } from 'native-base';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Di sini kita dapat menambahkan logika autentikasi
    if (email === '123' && password === '123') {
      // Autentikasi berhasil, alihkan ke halaman "Home"
      navigation.replace('Home'); // Gunakan replace agar pengguna tidak dapat kembali ke halaman login dengan menekan tombol "back"
    } else {
      // Autentikasi gagal, tampilkan pesan kesalahan
      alert('Login gagal. Periksa email dan password Anda.');
    }
  };

  const handleSignUp = () => {
    // Alihkan pengguna ke halaman "Sign Up" saat tombol "Sign Up" ditekan
    navigation.navigate('SignUp'); // Ganti "SignUp" dengan nama halaman sign-up yang sesuai.
  };

  return (
    <Center flex={1} w="100%" justifyContent="flex-end">
      {/* untuk mengatur baground image */}
      <Image
        source={require('../assets/bgLogin.jpg')}
        alt="Background Image"
        resizeMode="cover"
        height="50%"
        width="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
      />
      <Box safeArea p="8" py="8" w="100%" maxW="100%" bg="white" borderRadius="30" borderBottomRadius="0" >
        <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Welcome
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </FormControl>
          <Button mt="5" colorScheme="indigo" onPress={handleLogin}>
            Login
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={handleSignUp}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
