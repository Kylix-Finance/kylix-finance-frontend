export default {
  rpc: {
    yourCustomMethod: {
      description: "Description of your custom method",
      params: [
        {
          name: "param1",
          type: "Parameter1Type",
        },
      ],
      type: "ReturnType",
    },
  },
  types: {
    // Your custom types
    Parameter1Type: "u32",
    ReturnType: "Vec<u8>",
  },
};
