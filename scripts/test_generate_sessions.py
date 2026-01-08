
import unittest
from unittest.mock import patch, mock_open, MagicMock
import os
import sys
import json

# Adjust path to import the script under test
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import generate_sessions

class TestGenerateSessions(unittest.TestCase):

    def test_generate_filename(self):
        """Test filename generation with various inputs."""
        self.assertEqual(generate_sessions.generate_filename(1, "Basic Title"), "01-basic-title.md")
        self.assertEqual(generate_sessions.generate_filename(2, "Title: With Special Chars!"), "02-title-with-special-chars.md")
        self.assertEqual(generate_sessions.generate_filename(10, "  Trim Spaces  "), "10-trim-spaces.md")
        self.assertEqual(generate_sessions.generate_filename(5, "Title with   Multiple Spaces"), "05-title-with-multiple-spaces.md")

    @patch('generate_sessions.os.makedirs')
    @patch('generate_sessions.os.path.exists')
    @patch('generate_sessions.json.load')
    @patch('builtins.open', new_callable=mock_open)
    @patch('argparse.ArgumentParser.parse_args')
    def test_main_standard_generation(self, mock_args, mock_file, mock_json_load, mock_exists, mock_makedirs):
        """Test standard generation flow."""
        # Setup mocks
        mock_args.return_value = argparse.Namespace(week=None)
        mock_exists.side_effect = lambda x: False # Output dir doesn't exist initially, file doesn't exist
        mock_json_load.return_value = [
            {
                "week": 1,
                "content": ["Contenido 1"],
                "objectives": ["Obj 1"],
                "activities": "Activity 1",
                "evaluation": [{"type": "Test", "description": "Desc"}],
                "references": [{"text": "Ref 1"}]
            }
        ]

        generate_sessions.main()

        # Verify calls
        mock_makedirs.assert_called_with('sessions')
        # Check if file was opened for writing (ignoring the read open for json)
        # We expect 2 open calls: 1 for reading JSON (which we mocked via json.load but opened via builtins.open context), 
        # and 1 for writing markdown.
        # Since we mocked open, we can check calls.
        
        # Verify write call (Session 1)
        # The exact path depends on how it's constructed in the script, assuming 'sessions/01-contenido-1.md'
        expected_path = os.path.join('sessions', '01-contenido-1.md')
        mock_file.assert_any_call(expected_path, 'w', encoding='utf-8')
        
        # Verify content was written
        handle = mock_file()
        handle.write.assert_called()

    @patch('generate_sessions.os.makedirs')
    @patch('generate_sessions.os.path.exists')
    @patch('generate_sessions.json.load')
    @patch('builtins.open', new_callable=mock_open)
    @patch('argparse.ArgumentParser.parse_args')
    def test_main_duplicate_handling(self, mock_args, mock_file, mock_json_load, mock_exists, mock_makedirs):
        """Test that a counter is appended if file exists."""
        mock_args.return_value = argparse.Namespace(week=None)
        
        mock_json_load.return_value = [
            {"week": 1, "content": ["Topic"]}
        ]

        # Scenario: Output dir exists. Target file 'sessions/01-topic.md' exists.
        # 'sessions' dir exists -> True
        # 'sessions/01-topic.md' exists -> True (trigger while loop)
        # 'sessions/01-topic_1.md' exists -> False (break loop)
        
        # We need to be careful with mock_exists side_effect because it's called for dir and files
        # Sequence of calls roughly:
        # 1. exists(OUTPUT_DIR)
        # 2. exists(filepath) -> True
        # 3. exists(filepath_1) -> False
        
        # Let's mock based on input args
        def exists_side_effect(path):
            if path == 'sessions': return True
            if path.endswith('01-topic.md'): return True
            if path.endswith('01-topic_1.md'): return False
            return False

        mock_exists.side_effect = exists_side_effect

        generate_sessions.main()

        expected_new_path = os.path.join('sessions', '01-topic_1.md')
        mock_file.assert_any_call(expected_new_path, 'w', encoding='utf-8')


    @patch('generate_sessions.os.makedirs')
    @patch('generate_sessions.os.path.exists')
    @patch('generate_sessions.json.load')
    @patch('builtins.open', new_callable=mock_open)
    @patch('argparse.ArgumentParser.parse_args')
    def test_main_filter_week(self, mock_args, mock_file, mock_json_load, mock_exists, mock_makedirs):
        """Test generating a specific week."""
        mock_args.return_value = argparse.Namespace(week=2)
        mock_exists.return_value = False
        
        mock_json_load.return_value = [
            {"week": 1, "content": ["Topic 1"]},
            {"week": 2, "content": ["Topic 2"]}
        ]

        generate_sessions.main()

        # Should only write week 2
        path_week_1 = os.path.join('sessions', '01-topic-1.md')
        path_week_2 = os.path.join('sessions', '02-topic-2.md')

        with self.assertRaises(AssertionError):
             mock_file.assert_any_call(path_week_1, 'w', encoding='utf-8')
        
        mock_file.assert_any_call(path_week_2, 'w', encoding='utf-8')

import argparse # Needed for mocking namespace
if __name__ == '__main__':
    unittest.main()
