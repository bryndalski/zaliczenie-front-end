export class Database {


  db = [];

  constructor() {
    console.log('Database class initialized');
  }



  /**
   * Find all records with the given id
   * @param id {number} The id of the record to find
   * @returns {object} The record with the given id
   */
  findOne(id) {
    return this.db.find(record => record.id === id);
  }

  /**
   * adds a record to the database
   * @param record
   */
  add(record) {
    if (typeof record.id === 'number') {

      console.log(`Adding record with id: ${record.id}`);
      console.log(JSON.stringify(record, null, 2));
      this.db.push(record);
      return record;
    }

    return null;
  }

  /**
   * Updates a record in the database
   * @param id {number} The id of the record to update
   * @param record {object} The new record to update
   * @returns {object} The updated record
   */
  update(id, record) {
    const index = this.db.findIndex(record => record.id === id);
    this.db[index] = record;
    return record;
  }

  /**
   * Deletes a record from the database
   * @param id
   * @returns {{id: number}}
   * @param id
   */
  delete(id) {
    const index = this.db.findIndex(record => record.id === id);
    this.db.splice(index, 1);
    return { id };
  }


  randomRecord() {
    return this.db[Math.floor(Math.random() * this.db.length)];
  }

}