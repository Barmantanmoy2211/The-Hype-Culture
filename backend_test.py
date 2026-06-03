#!/usr/bin/env python3
"""
Backend API Testing Script for TheHypeCulture Website
Tests health check and contact form endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Load base URL from environment
BASE_URL = "https://hypedesign-hub.preview.emergentagent.com"

def print_test_header(test_name):
    """Print formatted test header"""
    print("\n" + "="*80)
    print(f"TEST: {test_name}")
    print("="*80)

def print_result(passed, message):
    """Print test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status}: {message}")

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print_test_header("GET /api/health - Health Check Endpoint")
    
    try:
        url = f"{BASE_URL}/api/health"
        print(f"Request URL: {url}")
        
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 200
        if response.status_code == 200:
            print_result(True, "Status code is 200")
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Test 2: Response should be JSON
        try:
            data = response.json()
            print_result(True, "Response is valid JSON")
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
        # Test 3: Check required fields
        required_fields = ['status', 'service', 'timestamp']
        all_fields_present = True
        for field in required_fields:
            if field in data:
                print_result(True, f"Field '{field}' is present: {data[field]}")
            else:
                print_result(False, f"Field '{field}' is missing")
                all_fields_present = False
        
        if not all_fields_present:
            return False
        
        # Test 4: Verify field values
        if data.get('status') == 'healthy':
            print_result(True, "Status is 'healthy'")
        else:
            print_result(False, f"Expected status 'healthy', got '{data.get('status')}'")
            return False
        
        if data.get('service') == 'TheHypeCulture API':
            print_result(True, "Service name is correct")
        else:
            print_result(False, f"Expected service 'TheHypeCulture API', got '{data.get('service')}'")
            return False
        
        # Test 5: Verify timestamp format
        try:
            datetime.fromisoformat(data.get('timestamp').replace('Z', '+00:00'))
            print_result(True, "Timestamp is in valid ISO format")
        except:
            print_result(False, "Timestamp is not in valid ISO format")
            return False
        
        print("\n✅ ALL HEALTH ENDPOINT TESTS PASSED")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_form_valid():
    """Test POST /api/contact with valid data"""
    print_test_header("POST /api/contact - Valid Submission")
    
    try:
        url = f"{BASE_URL}/api/contact"
        print(f"Request URL: {url}")
        
        # Valid contact form data
        payload = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+1234567890",
            "message": "I'm interested in learning more about your services."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 200
        if response.status_code == 200:
            print_result(True, "Status code is 200")
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Test 2: Response should be JSON
        try:
            data = response.json()
            print_result(True, "Response is valid JSON")
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
        # Test 3: Check success field
        if data.get('success') == True:
            print_result(True, "Success field is true")
        else:
            print_result(False, f"Expected success=true, got {data.get('success')}")
            return False
        
        # Test 4: Check message field
        if 'message' in data and data['message']:
            print_result(True, f"Success message received: {data['message']}")
        else:
            print_result(False, "Success message is missing")
            return False
        
        print("\n✅ VALID CONTACT FORM SUBMISSION TEST PASSED")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_form_missing_name():
    """Test POST /api/contact with missing name"""
    print_test_header("POST /api/contact - Missing Name (Should Fail)")
    
    try:
        url = f"{BASE_URL}/api/contact"
        payload = {
            "email": "john.doe@example.com",
            "phone": "+1234567890",
            "message": "Test message"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 400
        if response.status_code == 400:
            print_result(True, "Status code is 400 (Bad Request)")
        else:
            print_result(False, f"Expected status 400, got {response.status_code}")
            return False
        
        # Test 2: Response should contain error
        try:
            data = response.json()
            if 'error' in data:
                print_result(True, f"Error message received: {data['error']}")
                return True
            else:
                print_result(False, "Error field is missing in response")
                return False
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_form_missing_email():
    """Test POST /api/contact with missing email"""
    print_test_header("POST /api/contact - Missing Email (Should Fail)")
    
    try:
        url = f"{BASE_URL}/api/contact"
        payload = {
            "name": "John Doe",
            "phone": "+1234567890",
            "message": "Test message"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 400
        if response.status_code == 400:
            print_result(True, "Status code is 400 (Bad Request)")
        else:
            print_result(False, f"Expected status 400, got {response.status_code}")
            return False
        
        # Test 2: Response should contain error
        try:
            data = response.json()
            if 'error' in data:
                print_result(True, f"Error message received: {data['error']}")
                return True
            else:
                print_result(False, "Error field is missing in response")
                return False
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_form_missing_message():
    """Test POST /api/contact with missing message"""
    print_test_header("POST /api/contact - Missing Message (Should Fail)")
    
    try:
        url = f"{BASE_URL}/api/contact"
        payload = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+1234567890"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 400
        if response.status_code == 400:
            print_result(True, "Status code is 400 (Bad Request)")
        else:
            print_result(False, f"Expected status 400, got {response.status_code}")
            return False
        
        # Test 2: Response should contain error
        try:
            data = response.json()
            if 'error' in data:
                print_result(True, f"Error message received: {data['error']}")
                return True
            else:
                print_result(False, "Error field is missing in response")
                return False
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_form_without_phone():
    """Test POST /api/contact without optional phone field"""
    print_test_header("POST /api/contact - Without Phone (Optional Field)")
    
    try:
        url = f"{BASE_URL}/api/contact"
        payload = {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "message": "I don't want to provide my phone number."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test 1: Status code should be 200 (phone is optional)
        if response.status_code == 200:
            print_result(True, "Status code is 200 (phone is optional)")
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Test 2: Response should indicate success
        try:
            data = response.json()
            if data.get('success') == True:
                print_result(True, "Submission successful without phone number")
                return True
            else:
                print_result(False, "Submission failed even though phone is optional")
                return False
        except json.JSONDecodeError:
            print_result(False, "Response is not valid JSON")
            return False
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def main():
    """Run all tests"""
    print("\n" + "="*80)
    print("BACKEND API TESTING - TheHypeCulture Website")
    print(f"Base URL: {BASE_URL}")
    print("="*80)
    
    results = {
        "Health Check Endpoint": test_health_endpoint(),
        "Contact Form - Valid Submission": test_contact_form_valid(),
        "Contact Form - Missing Name": test_contact_form_missing_name(),
        "Contact Form - Missing Email": test_contact_form_missing_email(),
        "Contact Form - Missing Message": test_contact_form_missing_message(),
        "Contact Form - Without Phone": test_contact_form_without_phone()
    }
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print("\n" + "-"*80)
    print(f"Total: {passed}/{total} tests passed")
    print("="*80)
    
    # Exit with appropriate code
    sys.exit(0 if passed == total else 1)

if __name__ == "__main__":
    main()
