# storage-tool
A small script that will help you work with localStorage on front side and give you ability to create a new instance of the class for your case.

## Installing
Using npm:
```shell
$ npm install storage-tool
```

Using yarn:
```shell
$ yarn add storage-tool
```

## Methods
| Method | Arguments | Result | Description |
| ------ | --------- | ------ | ----------- |
| **getItem** | name as `string` | `parsed string` or `null` | The method takes a storage item name and returns its parsed value or `null` if there is no item in localStorage with such name |
| **setItem** | name as `string`, value | – | The method takes a storage item `name` and `value` as arguments. Method will remove item from storage if there is no value |
| **clear** | – | – | Works the same way as `localStorage.clear()`. It'll remove all items from localStorage |
| **key** | index of localStorage item | `string` or `null` | Works the same way as `localStorage.key()`. It'll return the key name of the localStorage item at the sent index or `null` if there is no item on such index |
| **length (getter)** | – | `number` | Works the same way as `localStorage.length`. It returns the length of the localStorage. You don't need to call this method as a function (it's a getter method). |
| **all (getter)** | – | `object` | The method returns `object` with all items of the localStorage (shape – `{ name: value }`). You don't need to call this method as a function (it's a getter method). |
| **all (setter)** | `object` | – | The method takes `object` with items that you want to set in the localStorage (shape – `{ name: value }`). Other items will be destroyed. You don't need to call this method as a function (it's a setter method). Just use the assignment like `Storage.all = { someKey: 'somevalue', otherKey: OtherValue }`. |

## Main feature
You can create your own instance of the Storage class using existing methods.

For example. If you want to save your token in storage you just need:
```js
import Storage from "storage-tool";

class CustomStorage extends Storage {
  static TOKEN_NAME = 'yourTokenName';

  static get token() {
    return this.getItem(this.TOKEN_NAME);
  }

  static set token(value) {
    return this.setItem(this.TOKEN_NAME, value);
  }
}

CustomStorage.token = 'some token value'; // to update token
CustomStorage.token = null; // to remove token (you can use any "false" js value for this)
const { token } = CustomStorage; // to get token value into token variable
```

## License
ISC