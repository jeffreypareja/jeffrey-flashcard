import useStateMachine from "@cassiozen/usestatemachine";
import { useCallback } from "react";

const useFlashCardGameModeHook = () => {
  const [state, send] = useStateMachine({
    initial: 'manage',
    states: {
      manage: {
        on: { play: 'play' },
      },
      play: {
        on: { manage: 'manage' },
      },
    },
 });

 const manageCards = useCallback(() => {
  send("manage")
 }, [])

 const playCards = useCallback(() => {
  send("play")
 }, [])


 return {
  mode: state.value, 
  manageCards,
  playCards
 }
}

export default useFlashCardGameModeHook
