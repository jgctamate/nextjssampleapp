'use client';

import { atom } from 'jotai';
// // 永続化のため、localStorageを使用
// const exisitingUserName = localStorage.getItem('userName');

// // userNameAtomの初期値をlocalStorageから取得
// const userNameAtom = atom<string>(exisitingUserName || '');

export const userNameAtom = atom('Full stack engineer');

export default userNameAtom;