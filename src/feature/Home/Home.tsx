import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { useChat } from './hooks/useChat';

const Home: React.FC = () => {
  const {
    currentInput,
    onChangeCurrentInput,
    messages,
    sendMessage,
    buttonDisable
  } = useChat();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.messageView}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.role === 'assistant'
                ? styles.assistantMessage
                : styles.userMessage
            ]}
          >
            <Text style={styles.messageText}>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputView}>
        <TextInput
          style={styles.currentInput}
          multiline={true}
          value={currentInput}
          onChangeText={onChangeCurrentInput}
        />
        <Button title={'Send'} onPress={sendMessage} disabled={buttonDisable} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  /* メッセージエリア */
  messageView: {
    flex: 1,
    marginTop: 50
  },
  message: {
    padding: 12,
    borderRadius: 4,
    margin: 8
  },
  userMessage: {
    alignSelf: 'flex-end'
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3efef'
  },
  messageText: {
    fontSize: 20
  },
  /* メッセージ入力エリア */
  inputView: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  currentInput: {
    flexGrow: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12
  }
});

export default Home;
