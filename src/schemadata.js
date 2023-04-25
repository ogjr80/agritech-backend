const { gql } = require("graphql-tag");

const typeDefs = gql`

scalar JSONObject

type User {
  userId: ID!
  email: String!
  displayName: String!
  profileImageURL: String
  role: Role!
  dateCreated: String!
  farms: [Farm!]!
}


 type Farm {
  farmId: ID!
  user: User!
  name: String!
  location: Location!
  size: Float!
  unit: Unit!
  description: String
  dateCreated: String!
  crops: [Crop!]!
  livestocks: [Livestock!]!
  weatherData: [WeatherData!]!
  iotDevices: [IoTDevices!]!
  fields: [Field!]!
  labors: [Labor!]!
  machineryEquipments: [MachineryEquipment!]!
}


enum Role {
  FARMER
  AGRONOMIST
  RESEARCHER
  OTHER
}

enum Unit {
  HECTARES
  ACRES
}

type Location {
  latitude: Float!
  longitude: Float!
}

type Crop {
  cropId: ID!
  farm: Farm!
  user: User!
  type: String!
  stage: CropStage!
  plantingDate: String!
  harvestDate: String
  healthStatus: String!
  dateCreated: String!
}

enum CropStage {
  GERMINATION
  FLOWERING
  HARVEST
}

type Livestock {
  livestockId: ID!
  farm: Farm!
  user: User!
  type: String!
  quantity: Int!
  healthStatus: String!
  location: String
  dateCreated: String!
}

type WeatherData {
  weatherDataId: ID!
  userId: ID!
  farmId: ID!
  farm: Farm!
  date: String!
  temperature: Float!
  humidity: Float!
  rainfall: Float!
  windSpeed: Float!
}

type IoTDevices {
  deviceId: ID!
  user: User!
  farm: Farm!
  type: String!
  location: Location!
  data: JSONObject!
  lastUpdated: String!
}

type Field {
  id: ID!
  farm: Farm!
  name: String!
  fieldArea: Float!
  soilType: String!
  soilMoisture: Float!
  soilPH: Float!
  soilFertility: [NutrientLevel!]!
}

type NutrientLevel {
  nutrient: String!
  value: Float!
}

type Labor {
  id: ID!
  farm: Farm!
  name: String!
  jobTitle: String!
  employmentStatus: String!
  startDate: String!
  endDate: String
  hoursWorked: Float!
  wageRate: Float!
}

type MachineryEquipment {
  id: ID!
  farm: Farm!
  name: String!
  equipmentType: String!
  manufacturer: String!
  model: String!
  purchaseDate: String!
  maintenanceSchedule: String!
  operationalHours: Float!
}

type Query {
  getUser(userId: ID!): User
  getUsers: [User!]!
  getFarm(farmId: ID!): Farm
  getFarms: [Farm!]!
  getFarmsByUserId(userId: ID!): [Farm!]!
  getCrop(cropId: ID!): Crop!
  getCrops: [Crop!]!
  getCropsByFarmId(farmId: ID!): [Crop!]!
  getLivestock(livestockId: ID!): Livestock!
  getAllLivestock: [Livestock!]!
  getLivestockByFarmId(farmId: ID!): [Livestock!]!
  getWeatherData(weatherDataId: ID!): WeatherData!
  getAllWeatherData: [WeatherData!]!
  getWeatherDataByFarmId(farmId: ID!): [WeatherData!]!
  getIoTDevice(deviceId: ID!): IoTDevices!
  getAllIoTDevices: [IoTDevices!]!
  getIoTDevicesByFarmId(farmId: ID!): [IoTDevices!]!
  getField(fieldId: ID!): Field!
  getFields: [Field!]!
  getFieldsByFarmId(farmId: ID!): [Field!]!
  getLabor(laborId: ID!): Labor!
  getAllLabor: [Labor!]!
  getLaborByFarmId(farmId: ID!): [Labor!]!
  getMachineryEquipment(machineryEquipmentId: ID!): MachineryEquipment!
  getAllMachineryEquipment: [MachineryEquipment!]!
  getMachineryEquipmentByFarmId(farmId: ID!): [MachineryEquipment!]!
  }
  
  type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(userId: ID!, input: UpdateUserInput!): User!
  createFarm(input: CreateFarmInput!): Farm!
  updateFarm(farmId: ID!, input: UpdateFarmInput!): Farm!
  createCrop(input: CropInput!): Crop!
  updateCrop(cropId: ID!, input: CropUpdateInput!): Crop!
  createLivestock(input: LivestockInput!): Livestock!
  updateLivestock(livestockId: ID!, input: LivestockUpdateInput!): Livestock!
  createWeatherData(input: WeatherDataInput!): WeatherData!
  updateWeatherData(weatherDataId: ID!, input: WeatherDataUpdateInput!): WeatherData!
  createIoTDevice(input: IoTDeviceInput!): IoTDevices!
  updateIoTDevice(deviceId: ID!, input: IoTDeviceUpdateInput!): IoTDevices!
  createField(input: FieldInput!): Field!
  updateField(fieldId: ID!, input: FieldUpdateInput!): Field!
  createLabor(input: LaborInput!): Labor!
  updateLabor(laborId: ID!, input: LaborUpdateInput!): Labor!
  createMachineryEquipment(input: MachineryEquipmentInput!): MachineryEquipment!
  updateMachineryEquipment(machineryEquipmentId: ID!, input: MachineryEquipmentUpdateInput!): MachineryEquipment!
  }
  
  input CreateUserInput {
  email: String!
  displayName: String!
  profileImageURL: String
  role: Role!
  }
  
  input UpdateUserInput {
  email: String
  displayName: String
  profileImageURL: String
  role: Role
  }
  
  input CreateFarmInput {
  userId: ID!
  name: String!
  location: LocationInput!
  size: Float!
  unit: Unit!
  description: String
  }
  
  input UpdateFarmInput {
  name: String
  location: LocationInput
  size: Float
  unit: Unit
  description: String
  }
  
  input LocationInput {
  latitude: Float!
  longitude: Float!
  }
  
  input CropInput {
  farmId: ID!
  userId: ID!
  type: String!
  stage: CropStage!
  plantingDate: String!
  harvestDate: String
  healthStatus: String!
  }
  
  input CropUpdateInput {
  farmId: ID
  userId: ID
  type: String
  stage: CropStage
  plantingDate: String
  harvestDate: String
  healthStatus: String
  }

  input LivestockInput {
    farmId: ID!
    userId: ID!
    type: String!
    quantity: Int!
    healthStatus: String!
    location: String
    }

    input WeatherDataInput {
        farmId: ID!
        date: String!
        temperature: Float!
        humidity: Float!
        rainfall: Float!
        windSpeed: Float!
        }
        
        input WeatherDataUpdateInput {
        farmId: ID
        date: String
        temperature: Float
        humidity: Float
        rainfall: Float
        windSpeed: Float
        }
        
        input IoTDeviceInput {
        userId: ID!
        farmId: ID!
        type: String!
        location: LocationInput!
        data: JSONObject!
        }
        
        input IoTDeviceUpdateInput {
        userId: ID
        farmId: ID
        type: String
        location: LocationInput
        data: JSONObject
        }
        
        input FieldInput {
        farmId: ID!
        name: String!
        fieldArea: Float!
        soilType: String!
        soilMoisture: Float!
        soilPH: Float!
        soilFertility: [NutrientLevelInput!]!
        }
        
        input FieldUpdateInput {
        farmId: ID
        name: String
        fieldArea: Float
        soilType: String
        soilMoisture: Float
        soilPH: Float
        soilFertility: [NutrientLevelInput]
        }
        
        input NutrientLevelInput {
        nutrient: String!
        value: Float!
        }
        
        input LaborInput {
        farmId: ID!
        name: String!
        jobTitle: String!
        employmentStatus: String!
        startDate: String!
        endDate: String
        hoursWorked: Float!
        wageRate: Float!
        }
        
        input LaborUpdateInput {
        farmId: ID
        name: String
        jobTitle: String
        employmentStatus: String
        startDate: String
        endDate: String
        hoursWorked: Float
        wageRate: Float
        }
        
        input MachineryEquipmentInput {
        farmId: ID!
        name: String!
        equipmentType: String!
        manufacturer: String!
        model: String!
        purchaseDate: String!
        maintenanceSchedule: String!
        operationalHours: Float!
        }
        
        input MachineryEquipmentUpdateInput {
        farmId: ID
        name: String
        equipmentType: String
        manufacturer: String
        model: String
        purchaseDate: String
        maintenanceSchedule: String
        operationalHours: Float
        }

`  

module.exports = typeDefs;
