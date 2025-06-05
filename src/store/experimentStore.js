import { create } from 'zustand';

const useExperimentStore = create((set) => ({
  isBalanceComplete: false,
  isLeverComplete: false,
  isSlopeComplete: false,
  
  setBalanceComplete: (value) => set({ isBalanceComplete: value }),
  setLeverComplete: (value) => set({ isLeverComplete: value }),
  setSlopeComplete: (value) => set({ isSlopeComplete: value }),
  
  isAllComplete: () => {
    const state = useExperimentStore.getState();
    return state.isBalanceComplete && state.isLeverComplete && state.isSlopeComplete;
  }
}));

// useExperimentStore.subscribe((state) => {
//   console.log('현재 실험 완료 상태:', {
//     양팔저울: state.isBalanceComplete,
//     지레: state.isLeverComplete,
//     빗면: state.isSlopeComplete,
//     전체완료: state.isAllComplete()
//   });
// });

export default useExperimentStore; 