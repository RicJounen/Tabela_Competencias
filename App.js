import React, { useState } from 'react';
  import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  
  const data = [
    { label: 'Demonstrar Atenção a Detalhes', value: '1' },
    { label: 'Demonstrar capacidade de comunicação com profissionais de diferentes áreas e especialidades', value: '2' },
    { label: 'Demonstrar capacidade de organização', value: '3' },
    { label: 'Demonstrar raciocínio lógico na organização das informações', value: '4' },
    { label: 'Seguir método de trabalho', value: '5' },
    { label: 'Trabalho em equipe', value: '6' },
  ];

  const data2 = [
    { label: 'Definir a sequência das atividades para desenvolvimento dos componentes, de acordo com os requisitos do sistema', value2: '1' },
    { label: 'Definir a infraestrutura física a ser utilizada no desenvolvimento dos componentes', value2: '2' },
    { label: 'Projetar os componentes do sistema considerando as plataformas computacionais', value2: '3' },
    { label: 'Definir os recursos humanos e materiais para o desenvolvimento dos componentes', value2: '4' },
    { label: 'Elaborar cronograma das etapas sequenciadas do desenvolvimento dos componentes, considerando a integração com outros profissionais envolvidos no projeto', value2: '5' },
    { label: 'Definir o custo estimado para o desenvolvimento dos componentes', value2: '6' },
  ];

  const data3 = [
    { label: 'OI', value3: '1' },
    { label: 'OI dnv', value3: '2' },
    { label: 'Olá', value3: '3' },
    { label: 'Tudo Bem?', value3: '4' },
  ];


  const DropdownComponent = () => {
    const [SelectedDropdown, setSelectedDropdown] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [value] = useState(null);
    const [value2] = useState(null);
    const [value3] = useState(null);

    const handleDropdownChange = (dropdownNumber, value) => {
      setSelectedDropdown(value ? dropdownNumber: null);
    };

    const handleAction = () => {
        setModalVisible(true);
    };

    return (
    <View style={styles.container}>
      <Modal 
      animationType='timing' 
      transparent={true} 
      visible={modalVisible}
      >
        <View style={styles.modalContent}>
            <TouchableOpacity style={styles.buttonCriarCriterios}>
              <Text style={styles.criarCriterios}>Criar Críterios</Text>
            </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.dropdownContent}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Competências Socioemocionais"
        searchPlaceholder="Search..."
        value={SelectedDropdown === 1 ? value : null}
        onChange={item => {
          handleDropdownChange(1, item.value);
        }}
      />
      </View>
      <View style={styles.dropdownContent2}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Competências Técnicas"
        searchPlaceholder="Search..."
        value={SelectedDropdown === 2 ? value2: null}
        onChange={item => {
          handleDropdownChange(2, item.value2);
        }}
      />
      </View>
      <View style={styles.dropdownContent3}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Competências Basicas"
        searchPlaceholder="Search..."
        value={SelectedDropdown === 3 ? value3: null}
        onChange={item => {
          handleDropdownChange(3, item.value3)
        }}
      />
      </View>
      {SelectedDropdown !== null && (
        <TouchableOpacity style={styles.actionButton} onPress={(handleAction)}>
          <Text style={styles.actionButtonText}>Confirmar</Text>
        </TouchableOpacity>
        
      )}
    </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    dropdown: {
      padding: 10,
      margin: 16,
      height: 50,
      borderColor: 'grey',
      borderWidth: 0.5,
      borderRadius: 5
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    dropdownContent: {
    },
    dropdownContent2: {
      marginBottom: 50,
      marginTop: 50,
    },
    dropdownContent3: {
    },
    actionButton:{
      width: 150,
      height: 25,
      borderWidth: 0.5,
      borderColor: 'blue',
      alignItems: 'center',
      backgroundColor: 'blue',
      borderRadius: 5,
      justifyContent: 'center',
      left: '30%',
      marginTop: 100
    },
    actionButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    modalContent: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: 350,
      backgroundColor: 'black',
      borderRadius: 7,
      left: '10%',
      marginTop: '50%',
    },
    buttonCriarCriterios: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: 'blue',
      width: '70%',
      height: 30,
    },
    criarCriterios: {
      color: 'white',
      
    }
  });