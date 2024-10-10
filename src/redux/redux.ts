import { put, takeEvery } from 'redux-saga/effects';

function* watchChangeColor() {
  yield takeEvery('CHANGE_COLOR_1', changeColor);
  yield takeEvery('CHANGE_COLOR_2', changeColor);
}

function* changeColor(action: any) {
  const color = getRandomColor();
  const type: string = action.type; // Corrija este trecho
  yield put({ type: type.replace('CHANGE', 'COLOR_CHANGED'), payload: color });
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default watchChangeColor;
