const initialState = {
    CHANGE_COLOR_1: '#FFFFFF',
    CHANGE_COLOR_2: '#FFFFFF',
    // Adicione mais estados iniciais se necessário
  };
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'COLOR_CHANGED_COLOR_1':
        return { ...state, CHANGE_COLOR_1: action.payload };
      case 'COLOR_CHANGED_COLOR_2':
        return { ...state, CHANGE_COLOR_2: action.payload };
      // Adicione mais cases como este para cada botão
      default:
        return state;
    }
  };
  
  export default reducer;