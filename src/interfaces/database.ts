abstract class DatabaseInterface {
  _instance: any;
  _conn: any;
  _connected: any;

  static getInstance(): any {}
  static runQuery(query: string): any {}
}

export default DatabaseInterface;
