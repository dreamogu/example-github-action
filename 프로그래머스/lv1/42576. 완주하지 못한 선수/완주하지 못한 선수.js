function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (sortedCompletion[i] !== sortedParticipant[i]) {
      return sortedParticipant[i];
    }
  }
}