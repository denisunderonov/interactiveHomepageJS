
export function musicBar($player) {
    $player.addEventListener('mouseover', () => {
        $player.style = `
        animation-name: musicbarup;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
        `
    })
    $player.addEventListener('mouseout', () => {
        $player.style = `
        animation-name: musicbardown;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
        `
    })
}