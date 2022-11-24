export function determineAvatarSize(screen: string) {    
    switch(screen) {
      case 'xs':
      case 'ss':
        return 'small'
      case 'sm':
      case 'md':
      case 'lg':
        return 'mediumLarge'
      case 'xl':
        return 'large'
      default:
        return 'large'
    }
}
