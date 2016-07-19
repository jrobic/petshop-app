class Animal {
  constructor(data) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.color = data.color || '';
    this.origin = data.origin || '';
    this.avgLife = data.avgLife || '';
    this.avgSize = data.avgSize || '';
    this.avgWeight = data.avgWeight || '';
    this.avgPrice = data.avgPrice || '';
    this.createdAt = data.createdAt || '';
    this.updatedAt = data.updateAt || '';
  }
}

export default Animal;
