// Just a helper service for grabbing attributes from an h1
export class AttributesService {
  attributes(h1:HTMLElement) {
    return Object.keys(h1.attributes).map((key:any) => {
      return h1.attributes[key].nodeName;
    })
    .join(', ');
  }
}
