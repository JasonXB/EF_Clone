//sizeInput is assumed to be the size in xl screen
export function responsiveImageSize(screen: string, sizeInput: number) {    
    switch(screen) {
      case 'xs':
      case 'ss':
        return sizeInput * .5
      case 'sm':
      case 'md':
      case 'lg':
        return sizeInput * .5
      case 'xl':
        return sizeInput
      default:
        return sizeInput * .25
    }
}
